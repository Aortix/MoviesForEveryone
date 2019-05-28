import React, { Component } from "react";
import genreIds from "../movieGenres.js";
import SingleMovieResult from "./singleMovieResult.js";

class movieResults extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.movieResultsLength >= 12 &&
      prevProps.movieResultsLength < 12
    ) {
      this.setState({ loadingToLong: 0 });
      clearTimeout(this.state.timeoutVariable);
      this.setState({ timeoutVariable: null });
    } else if (
      this.props.movieResultsLength < 12 &&
      prevProps.movieResultsLength >= 12
    ) {
      this.setState({
        timeoutVariable: setTimeout(() => {
          this.setState({ loadingToLong: 1 });
        }, 12000)
      });
    }

    if (
      prevProps.startAndStopSearch === 0 &&
      this.props.startAndStopSearch === 1
    ) {
      clearTimeout(this.state.timeoutVariable);
      this.setState({ loadingToLong: 0, timeoutVariable: null });
    }

    if (this.state.toggle === false && prevState.toggle === true) {
      window.removeEventListener("click", this.listen, false);
    }
  };

  state = {
    loadingToLong: 0,
    timeoutVariable: null,
    movieData: null,
    id: null,
    Title: null,
    Poster: null,
    MouseY: 0,
    toggle: false
  };

  quitSearch = () => {
    this.props.cancelSearch(1);
  };

  listen = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  setMovieId = (
    id,
    title,
    genre,
    overview,
    release_date,
    vote_average,
    vote_count,
    image,
    mouseY
  ) => {
    this.setState({
      id: id,
      Title: title,
      Poster: image,
      Genre: genre,
      movieData: {
        "Release date": release_date,
        "Average Score (0-10)": vote_average,
        "Amount of Scores": vote_count
      },
      Overview: overview,
      mouseY: mouseY
    });
    window.addEventListener("click", this.listen, false);
  };

  render() {
    if (
      !(this.props.movieResultsLength >= 12) &&
      this.props.currentApiPage !== this.props.totalPages &&
      this.props.startAndStopSearch !== 1
    ) {
      return (
        <div className="movieResults_container">
          <div className="movieResults-loading_container">
            <i className="fas fa-spinner" />
            <h2>Loading</h2>
            <p>{this.props.movieResultsLength} results</p>
            {this.state.loadingToLong === 1 ? (
              <div>
                <p className="movieResults-loading_statement">
                  This is taking some time.
                </p>
                <div
                  className="movieResults-stop_searching"
                  onClick={this.quitSearch}
                >
                  Quit the search and show results?
                </div>
              </div>
            ) : null}{" "}
          </div>
        </div>
      );
    } else {
      return (
        <div className="movieResults_container">
          {this.props.results
            .slice(this.props.limitNumber - 11, this.props.limitNumber + 1)
            .map((result, index) => {
              return (
                <div
                  key={`${result["id"]}-${index}`}
                  className="movieResults_individual_results"
                  onClick={e => {
                    this.setMovieId(
                      result["id"],
                      result["title"],
                      result["genre_ids"].join(),
                      result["overview"],
                      result["release_date"],
                      result["vote_average"],
                      result["vote_count"],
                      this.props.images[index + this.props.limitNumber - 11],
                      e.pageY - 100
                    );
                  }}
                >
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
                        return `${Object.keys(genreIds).filter(
                          (genres, index) => {
                            return genreIds[genres] === items;
                          }
                        )} `;
                      })}
                    </p>
                  </div>
                  <div className="movieResults_image_results">
                    <img
                      className="movieResults_individual_images"
                      src={
                        this.props.images[index + this.props.limitNumber - 11]
                      }
                      alt="Movie Poster"
                    />
                  </div>
                </div>
              );
            })}
          {this.state.toggle === true ? (
            <SingleMovieResult
              movieData={this.state.movieData}
              id={this.state.id}
              title={this.state.Title}
              poster={this.state.Poster}
              genre={this.state.Genre}
              overview={this.state.Overview}
              mouseY={this.state.mouseY}
            />
          ) : null}
        </div>
      );
    }
  }
}

export default movieResults;
