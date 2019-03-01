import { CHECK_MOVIE_TITLE, CHECK_MOVIE_GENRE } from "../actions/types.js";

const initialState = {
  movieTitleChecked: true,
  movieGenreChecked: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHECK_MOVIE_TITLE:
      return {
        ...state,
        movieTitleChecked: !state.movieTitleChecked
      };
    case CHECK_MOVIE_GENRE:
      return {
        ...state,
        movieGenreChecked: !state.movieGenreChecked
      };
    default:
      return { ...state };
  }
}
