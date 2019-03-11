import React from "react";
import genreIds from "../movieGenres.js";

const movieResults = props => {
  return (
    <div className="movieResults_container">
      {props.results.map((result, index) => {
        return (
          <div className="movieResults_individual_results" id={index}>
            <div className="movieResults_text_results">
            <p className="movieResults_individual_titles">{result["title"]}</p>
            <p className="movieResults_individual_date">
              {result["release_date"]}
            </p>
            <p className="movieResults_individual_genre_ids"> 
            {result["genre_ids"].map(items => {
            return `${Object.keys(genreIds).filter(genres => {
              return genreIds[genres] === items
            })} `})}
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
