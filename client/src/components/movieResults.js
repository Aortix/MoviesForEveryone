import React from "react";

const movieResults = props => {
  return (
    <div className="movieResults_container">
      {props.results.map((result, indexing) => {
        return result.map((movies, index) => {
          return (
            <div className="movieResults_individual_results">
              <p className="movieResults_individual_titles">
                {movies["title"]}
              </p>
              <p className="movieResults_individual_overviews">
                {movies["overview"]}
              </p>
              <img
                className="movieResults_individual_images"
                src={props.images[indexing][index]}
                alt="Movie Poster"
              />
            </div>
          );
        });
      })}
    </div>
  );
};

/*         */
export default movieResults;
