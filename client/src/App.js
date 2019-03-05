import React, { Component } from "react";
import { connect } from "react-redux";

//Actions
import { changeGenre } from "./actions/changeGenre";
import { changeTitle } from "./actions/changeTitle";
import { changeYear } from "./actions/changeYear";
import { isChecked } from "./actions/isChecked";
import { searchMovies } from "./actions/searchMovies";

//Components
import MovieTitle from "./components/movieTitle.js";
import MovieReleaseYear from "./components/movieReleaseYear.js";
import MovieGenre from "./components/movieGenre.js";
import MovieResults from "./components/movieResults.js";
import GenreSpecific from "./components/genreSpecific.js";
import TitleContain from "./components/titleContain.js";
import Filter from "./components/filter.js";

class App extends Component {
  componentDidUpdate = () => {
    console.log(
      this.props.title,
      this.props.year,
      this.props.genre,
      this.props.results,
      this.props.currentApiPage,
      this.props.data,
      this.props.imageUrl,
      this.props.isCheckedTitle,
      this.props.isCheckedGenre
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
        <TitleContain handleCheck={this.props.isChecked} />
        <Filter handleFilter={this.props.searchMovies} />
        <MovieGenre handleCheckChange={this.props.changeGenre} />
        <GenreSpecific handleCheck={this.props.isChecked} />
        <MovieReleaseYear handleReleaseYearChange={this.props.changeYear} />
        <MovieResults results={this.props.data} images={this.props.imageUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.changeTitle.title,
  genre: state.changeGenre.genre,
  year: state.changeYear.year,
  results: state.search.results,
  currentApiPage: state.search.currentApiPage,
  data: state.search.data,
  imageUrl: state.search.imageUrl,
  isCheckedTitle: state.isChecked.movieTitleChecked,
  isCheckedGenre: state.isChecked.movieGenreChecked
});

export default connect(
  mapStateToProps,
  { changeGenre, changeTitle, changeYear, isChecked, searchMovies }
)(App);
