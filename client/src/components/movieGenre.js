import React from "react";
import movieGenres from "../movieGenres.js";

const movieGenre = props => {
  return (
    <div className="movie_genre_container">
      {Object.keys(movieGenres).map((genre, index) => {
        return (
          <div className="movie_genre_genres" key={index}>
            <input
              onClick={props.handleCheckChange}
              type="checkbox"
              value={genre}
              name={genre}
            />
            <span className={genre}>{genre}</span>
          </div>
        );
      })}
    </div>
  );
};

export default movieGenre;
