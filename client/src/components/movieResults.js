import React, { Component } from "react";
import genreIds from "../movieGenres.js";

class movieResults extends Component {
  componentDidUpdate = prevProps => {
    if (
      this.props.movieResultsLength >= 12 &&
      prevProps.movieResultsLength < 12
    ) {
      console.log("When you find 12 movies, this is called.");
      this.setState({ loadingToLong: 0 });
      clearTimeout(this.state.timeoutVariable);
      this.setState({ timeoutVariable: null });
    } else if (
      this.props.movieResultsLength < 12 &&
      prevProps.movieResultsLength >= 12
    ) {
      console.log("When you search this is called.");
      this.setState({
        timeoutVariable: setTimeout(() => {
          this.setState({ loadingToLong: 1 });
        }, 5000)
      });
    }

    if (
      prevProps.startAndStopSearch === 0 &&
      this.props.startAndStopSearch === 1
    ) {
      console.log("When you cancel a search, this is called.");
      clearTimeout(this.state.timeoutVariable);
      this.setState({ loadingToLong: 0, timeoutVariable: null });
    }
  };

  state = {
    loadingToLong: 0,
    timeoutVariable: null
  };

  quitSearch = () => {
    this.props.cancelSearch(1);
  };

  render() {
    if (
      !(this.props.movieResultsLength >= 12) &&
      this.props.currentApiPage !== this.props.totalPages &&
      this.props.startAndStopSearch !== 1
    ) {
      return (
        <div className="movieResults-loading_container">
          <i className="fas fa-spinner" />
          <h2>Loading</h2>
          <p>{this.props.movieResultsLength} results</p>
          {this.state.loadingToLong === 1 ? (
            <div>
              <p>This is taking some time.</p>
              <div onClick={this.quitSearch}>
                Quit the search and show results?
              </div>
            </div>
          ) : null}
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
                  key={result["id"] + index}
                  className="movieResults_individual_results"
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
        </div>
      );
    }
  }
}

export default movieResults;
