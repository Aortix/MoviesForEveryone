import React, { Component } from "react";

class movieTitle extends Component {
  render() {
    if (
      !(this.props.movieResultsLength >= 12) &&
      this.props.currentApiPage !== this.props.totalPages &&
      this.props.startAndStopSearch !== 1
    ) {
      return (
        <div className="movie_search_container">
          <p className="movie_search_title">Movie Name</p>
          <form>
            <input
              id="movie_search_input"
              type="text"
              placeholder="Searching..."
              value={this.props.title}
              readOnly
            />
          </form>
          {this.props.errors.title !== undefined ? (
            <p>{this.props.errors.title}</p>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className="movie_search_container">
          <p className="movie_search_title">Movie Name</p>
          <form onSubmit={this.props.handleTitleSubmit}>
            <input
              id="movie_search_input"
              type="text"
              placeholder="Random Name..."
              value={this.props.title}
              onChange={this.props.handleTitleChange}
            />
          </form>
          {this.props.errors.title !== undefined ? (
            <p>{this.props.errors.title}</p>
          ) : null}
        </div>
      );
    }
  }
}

export default movieTitle;
