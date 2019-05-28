import React, { Component } from "react";

import genreIds from "./../movieGenres.js";

class SingleMovieResult extends Component {
  componentDidMount = () => {
    console.log(this.props.mouseY);
    document
      .querySelector(".SingleMovieResult-container")
      .style.setProperty("top", `${this.props.mouseY}px`);
  };
  render() {
    return (
      <div id="SingleMovieResult" className="SingleMovieResult-container">
        <h3 className="SingleMovieResult-title">{this.props.title}</h3>
        <img
          className="SingleMovieResult-image"
          src={this.props.poster}
          alt="movie"
        />
        <p className="SingleMovieResult-genre">
          {this.props.genre
            .split(",")
            .map(genres => {
              return (genres = Object.keys(genreIds).filter(
                (key, index, originalArray) => {
                  if (Object.values(genreIds)[index] === Number(genres)) {
                    return key;
                  } else {
                    return false;
                  }
                }
              ));
            })
            .join(", ")}
        </p>
        {Object.entries(this.props.movieData).map(([key, value], index) => {
          return (
            <div
              key={`${this.props.id}-${index}`}
              className="SingleMovieResult-individual_entries"
            >
              <span>{`${key}:`}</span> <span>{value}</span>
            </div>
          );
        })}
        <p className="SingleMovieResult-overview">{this.props.overview}</p>
      </div>
    );
  }
}

export default SingleMovieResult;
