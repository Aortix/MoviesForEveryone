import {
  CHECK_MOVIE_TITLE,
  CHECK_MOVIE_GENRE,
  TEMP_CHECK_MOVIE_GENRE,
  TEMP_CHECK_MOVIE_TITLE
} from "../actions/types.js";

const initialState = {
  movieTitleChecked: true,
  movieGenreChecked: false,
  tempMovieTitleChecked: true,
  tempMovieGenreChecked: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHECK_MOVIE_TITLE:
      return {
        ...state,
        movieTitleChecked: state.tempMovieTitleChecked
      };

    case CHECK_MOVIE_GENRE:
      return {
        ...state,
        movieGenreChecked: state.tempMovieGenreChecked
      };

    case TEMP_CHECK_MOVIE_TITLE:
      return {
        ...state,
        tempMovieTitleChecked: !state.tempMovieTitleChecked
      };
    case TEMP_CHECK_MOVIE_GENRE:
      return {
        ...state,
        tempMovieGenreChecked: !state.tempMovieGenreChecked
      };
    default:
      return { ...state };
  }
}
