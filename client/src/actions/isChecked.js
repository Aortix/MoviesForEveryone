import { CHECK_MOVIE_TITLE, CHECK_MOVIE_GENRE } from "./types.js";

export const isChecked = e => dispatch => {
  if (e.target.value === "title") {
    dispatch({
      type: CHECK_MOVIE_TITLE
    });
  } else if (e.target.value === "genre") {
    dispatch({
      type: CHECK_MOVIE_GENRE
    });
  }
};
