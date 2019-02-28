import React, { Component } from "react";
import { connect } from "react-redux";

//Actions
import { changeGenre } from "./actions/changeGenre";
import { changeTitle } from "./actions/changeTitle";
import { changeYear } from "./actions/changeYear";
import { searchMovies } from "./actions/searchMovies";

//Components
import MovieTitle from "./components/movieTitle.js";
import MovieReleaseYear from "./components/movieReleaseYear.js";
import MovieGenre from "./components/movieGenre.js";
import Filter from "./components/filter.js";

class App extends Component {
  componentDidUpdate = () => {
    console.log(
      this.props.title,
      this.props.year,
      this.props.genre,
      this.props.data
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.searchMovies();
  };

  render() {
    return (
      <div className="App">
        <MovieTitle
          handleTitleChange={this.props.changeTitle}
          handleTitleSubmit={this.handleFormSubmit}
          title={this.props.title}
        />
        <Filter handleFilter={this.props.searchMovies} />
        <MovieReleaseYear handleReleaseYearChange={this.props.changeYear} />
        <MovieGenre handleCheckChange={this.props.changeGenre} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.changeTitle.title,
  genre: state.changeGenre.genre,
  year: state.changeYear.year,
  data: state.search.data
});

export default connect(
  mapStateToProps,
  { changeGenre, changeTitle, changeYear, searchMovies }
)(App);
