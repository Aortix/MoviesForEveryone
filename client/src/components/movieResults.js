import React from "react";
import genreIds from "../movieGenres.js";

const movieResults = props => {
  return (
    <div className="movieResults_container">
      {props.results.slice(0, 12).map((result, index) => {
        return (
          <div key={result["id"]} className="movieResults_individual_results">
            <div className="movieResults_text_results">
              <h3 className="movieResults_individual_titles">
                {result["title"]}
              </h3>
              <p className="movieResults_individual_date">
                <span>Year: </span>
                {result["release_date"]}
              </p>
              <p className="movieResults_individual_genre_ids">
                <span>Genre: </span>
                {result["genre_ids"].map(items => {
                  return `${Object.keys(genreIds).filter((genres, index) => {
                    return genreIds[genres] === items;
                  })} `;
                })}
              </p>
            </div>
            <div className="movieResults_image_results">
              <img
                className="movieResults_individual_images"
                src={props.images[index]}
                alt="Movie Poster"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default movieResults;
