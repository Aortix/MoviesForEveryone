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
import WebsiteTitle from "./components/websiteTitle.js";
import Filter from "./components/filter.js";
import MobileFilter from "./components/mobileFilter.js";
import MovieTitle from "./components/movieTitle.js";
import MovieReleaseYear from "./components/movieReleaseYear.js";
import MovieGenre from "./components/movieGenre.js";
import MovieResults from "./components/movieResults.js";
import GenreSpecific from "./components/genreSpecific.js";
import TitleContain from "./components/titleContain.js";
import Search from "./components/search.js";
import PageNumbers from "./components/pageNumbers.js";

class App extends Component {
  componentDidMount = () => {
    this.props.initialSearch();
  }

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
      this.props.movieDataToDisplay,
      this.props.movieImagesToDisplay
    );

    if (
      this.props.currentApiPage !== this.props.totalPages &&
      this.props.movieResultsLength < 12
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

  handleFilter = e => {
    document
      .querySelector(".complete_filter_container_minus_filter")
      .classList.toggle("hide_filter_container");
  };

  render() {
    return (
      <div className="App">
        <div className="Content">
          <header className="header_container">
            <WebsiteTitle />
          </header>
          <aside className="complete_filter_container">
            <MobileFilter handleSearch={this.props.initialSearch} />
            <Filter handleFilter={this.handleFilter} />
            <div className="complete_filter_container_minus_filter">
              <MovieTitle
                handleTitleChange={this.props.changeTitle}
                handleTitleSubmit={this.handleFormSubmit}
                title={this.props.title}
              />
              <TitleContain handleCheck={this.props.isChecked} />
              <MovieGenre handleCheckChange={this.props.changeGenre} />
              <GenreSpecific handleCheck={this.props.isChecked} />
              <MovieReleaseYear
                handleReleaseYearChange={this.props.changeYear}
              />
            </div>
          </aside>
          <Search handleSearch={this.props.initialSearch} />
          <section className="results_and_page_numbers_container">
            <MovieResults
              results={this.props.movieDataToDisplay}
              images={this.props.movieImagesToDisplay}
            />

            <PageNumbers
              numbers={this.props.pageNumber}
              handleNumberClick={this.handleNumberClick}
            />
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.changeGenre.genre,
  currentPage: state.searchMovies.currentPage,
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
