import React from "react";

const movieResults = props => {
  return (
    <div className="movieResults_container">
      {props.results.map((result, index) => {
        return (
          <div className="movieResults_individual_results" id={index}>
            <p className="movieResults_individual_titles">{result["title"]}</p>
            <p className="movieResults_individual_overviews">
              {result["overview"]}
            </p>
            <img
              className="movieResults_individual_images"
              src={props.images[index]}
              alt="Movie Poster"
            />
          </div>
        );
      })}
    </div>
  );
};

export default movieResults;
