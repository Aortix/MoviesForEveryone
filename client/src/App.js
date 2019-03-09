import React, { Component } from "react";
import { connect } from "react-redux";

//Actions
import { changeGenre } from "./actions/changeGenre";
import { changeTitle } from "./actions/changeTitle";
import { changeYear } from "./actions/changeYear";
import { isChecked } from "./actions/isChecked";
import { searchMovies } from "./actions/searchMovies";
import { initialSearch } from "./actions/initialSearch";
import { changePage } from "./actions/changePage";

//Components
import MovieTitle from "./components/movieTitle.js";
import MovieReleaseYear from "./components/movieReleaseYear.js";
import MovieGenre from "./components/movieGenre.js";
import MovieResults from "./components/movieResults.js";
import GenreSpecific from "./components/genreSpecific.js";
import TitleContain from "./components/titleContain.js";
import Filter from "./components/filter.js";
import PageNumbers from "./components/pageNumbers.js";

class App extends Component {
  componentDidUpdate = () => {
    console.log(
      this.props.currentApiPage,
      this.props.currentApiPageCount,
      this.props.totalPages,
      this.props.movieResultsLength,
      this.props.title,
      this.props.genre,
      this.props.year,
      this.props.isCheckedGenre,
      this.props.isCheckedTitle,
      this.props.movieData,
      this.props.movieImages,
      this.props.pageNumber,
      this.props.dataToDisplay,
      this.props.imagesToDisplay
    );

    if (
      this.props.currentApiPage !== this.props.totalPages &&
      this.props.movieResultsLength < 20
    ) {
      this.props.searchMovies(
        this.props.currentApiPage,
        this.props.title,
        this.props.genre,
        this.props.year
      );
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.initialSearch();
  };

  handleNumberClick = e => {
    this.props.changePage(Number(e.target.innerHTML));
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
        <Filter handleFilter={this.props.initialSearch} />
        <MovieGenre handleCheckChange={this.props.changeGenre} />
        <GenreSpecific handleCheck={this.props.isChecked} />
        <MovieReleaseYear handleReleaseYearChange={this.props.changeYear} />
        <MovieResults
          results={this.props.movieDataToDisplay}
          images={this.props.movieImagesToDisplay}
        />
        <PageNumbers
          numbers={this.props.pageNumber}
          handleNumberClick={this.handleNumberClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.changeGenre.genre,
  page: state.changePage.page,
  title: state.changeTitle.title,
  year: state.changeYear.year,
  totalPages: state.searchMovies.totalPages,
  isCheckedTitle: state.isChecked.movieTitleChecked,
  isCheckedGenre: state.isChecked.movieGenreChecked,
  movieResultsLength: state.searchMovies.movieResultsLength,
  currentApiPage: state.searchMovies.currentApiPage,
  currentApiPageCount: state.searchMovies.currentApiPageCount,
  pageNumberCount: state.searchMovies.pageNumberCount,
  pageNumber: state.searchMovies.pageNumber,
  movieData: state.searchMovies.movieData,
  movieImages: state.searchMovies.movieImages,
  movieDataToDisplay: state.searchMovies.movieDataToDisplay,
  movieImagesToDisplay: state.searchMovies.movieImagesToDisplay
});

export default connect(
  mapStateToProps,
  {
    changeGenre,
    changeTitle,
    changeYear,
    isChecked,
    searchMovies,
    initialSearch,
    changePage
  }
)(App);
