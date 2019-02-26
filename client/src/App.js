import React, { Component } from "react";

import MovieTitle from "./components/movieTitle.js";
import MovieReleaseYear from "./components/movieReleaseYear.js";
import MovieGenre from "./components/movieGenre.js";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      genre: [],
      releaseYear: 0
    };
  }

  handleTitleSubmit = e => {
    e.preventDefault();
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleReleaseYearChange = e => {
    this.setState({
      releaseYear: e.target.value
    });
  };

  handleCheckChange = e => {
    if (e.target.checked === false) {
      this.setState({
        genre: this.state.genre.filter(genre => {
          return e.target.value !== genre;
        })
      });
    } else {
      this.setState({
        genre: [...this.state.genre, e.target.value]
      });
    }
  };

  componentDidUpdate = e => {
    console.log(this.state.title, this.state.releaseYear, this.state.genre);
  };

  render() {
    return (
      <div className="App">
        <MovieTitle
          handleTitleChange={this.handleTitleChange}
          handleTitleSubmit={this.handleTitleSubmit}
          title={this.state.title}
        />
        <MovieReleaseYear
          handleReleaseYearChange={this.handleReleaseYearChange}
        />
        <MovieGenre handleCheckChange={this.handleCheckChange} />
      </div>
    );
  }
}

export default App;
