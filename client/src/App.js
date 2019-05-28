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
import { cancelSearch } from "./actions/searchMovies";
import { startSearch } from "./actions/initialSearch";
import { stopSearch } from "./actions/searchMovies";

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
  state = {
    title: "",
    year: 0
  };

  componentDidMount = () => {
    this.props.initialSearch();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.currentApiPage < this.props.totalPages &&
      this.props.movieResultsLength < 12 &&
      Object.keys(this.props.errors.length === 0)
    ) {
      this.props.searchMovies(
        this.props.currentApiPage,
        this.props.title,
        this.props.genre,
        this.props.year
      );
    }

    if (this.props.currentPage === 1) {
      if (
        document
          .getElementById(`pageNumber-1`)
          .classList.contains("pageNumber-border")
      ) {
      } else {
        document
          .getElementById(`pageNumber-1`)
          .classList.toggle("pageNumber-border");
      }
    }

    if (
      this.props.currentApiPage >= this.props.totalPages &&
      !(this.props.movieResultsLength >= 12)
    ) {
      this.props.cancelSearch(1);
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.initialSearch();
  };

  handleNumberClick = e => {
    this.props.stopSearch(0);
    document
      .getElementById(`pageNumber-${this.props.currentPage}`)
      .classList.toggle("pageNumber-border");
    document
      .getElementById(`pageNumber-${Number(e.target.innerHTML)}`)
      .classList.toggle("pageNumber-border");
    this.props.changePage(Number(e.target.innerHTML));
  };

  handleFilter = e => {
    document
      .querySelector(".complete_filter_container_minus_filter")
      .classList.toggle("hide_filter_container");
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleYearChange = e => {
    this.setState({ year: e.target.value });
  };

  handleSearch = () => {
    this.props.startSearch(this.state.title, this.state.year);
  };

  render() {
    return (
      <div className="App">
        <div className="Content">
          <header className="header_container">
            <WebsiteTitle />
          </header>
          <aside className="complete_filter_container">
            <MobileFilter
              handleSearch={this.handleSearch}
              movieResultsLength={this.props.movieResultsLength}
              currentApiPage={this.props.currentApiPage}
              totalPages={this.props.totalPages}
              startAndStopSearch={this.props.startAndStopSearch}
            />
            <Filter handleFilter={this.handleFilter} />
            <div className="complete_filter_container_minus_filter">
              <MovieTitle
                handleTitleChange={this.handleTitleChange}
                handleTitleSubmit={this.handleFormSubmit}
                tempTitle={this.state.title}
                movieResultsLength={this.props.movieResultsLength}
                currentApiPage={this.props.currentApiPage}
                totalPages={this.props.totalPages}
                startAndStopSearch={this.props.startAndStopSearch}
                errors={this.props.errors}
              />
              <TitleContain handleCheck={this.props.isChecked} />
              <MovieGenre
                handleCheckChange={this.props.changeGenre}
                errors={this.props.errors}
              />
              <GenreSpecific handleCheck={this.props.isChecked} />
              <MovieReleaseYear
                handleReleaseYearChange={this.handleYearChange}
                year={this.state.year}
                movieResultsLength={this.props.movieResultsLength}
                currentApiPage={this.props.currentApiPage}
                totalPages={this.props.totalPages}
                startAndStopSearch={this.props.startAndStopSearch}
              />
            </div>
          </aside>
          <Search
            errors={this.props.errors}
            handleSearch={this.handleSearch}
            movieResultsLength={this.props.movieResultsLength}
            currentApiPage={this.props.currentApiPage}
            totalPages={this.props.totalPages}
            startAndStopSearch={this.props.startAndStopSearch}
          />
          <section className="results_and_page_numbers_container">
            <MovieResults
              results={this.props.movieData}
              images={this.props.movieImages}
              movieResultsLength={this.props.movieResultsLength}
              limitNumber={this.props.limitNumber}
              currentApiPage={this.props.currentApiPage}
              totalPages={this.props.totalPages}
              cancelSearch={this.props.cancelSearch}
              startAndStopSearch={this.props.startAndStopSearch}
            />
          </section>
        </div>
        <div className="Content-page_numbers">
          <PageNumbers
            numbers={this.props.pageNumber}
            handleNumberClick={this.handleNumberClick}
            startAndStopSearch={this.props.startAndStopSearch}
            totalPages={this.props.totalPages}
            currentApiPage={this.props.currentApiPage}
            movieResultsLength={this.props.movieResultsLength}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.changeGenre.genre,
  currentPage: state.searchMovies.currentPage,
  title: state.changeTitle.title,
  tempTitle: state.changeTitle.tempTitle,
  year: state.changeYear.year,
  tempYear: state.changeYear.tempYear,
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
  movieImagesToDisplay: state.searchMovies.movieImagesToDisplay,
  limitNumber: state.searchMovies.limitNumber,
  startAndStopSearch: state.searchMovies.startAndStopSearch,
  errors: state.initialSearch.errors
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
    changePage,
    cancelSearch,
    startSearch,
    stopSearch
  }
)(App);
