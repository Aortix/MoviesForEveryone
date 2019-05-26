import {
  CHECK_MOVIE_TITLE,
  CHECK_MOVIE_GENRE,
  TEMP_CHECK_MOVIE_GENRE,
  TEMP_CHECK_MOVIE_TITLE
} from "./types.js";

export const isChecked = e => dispatch => {
  if (e.target.value === "title") {
    dispatch({
      type: TEMP_CHECK_MOVIE_TITLE
    });
  } else if (e.target.value === "genre") {
    dispatch({
      type: TEMP_CHECK_MOVIE_GENRE
    });
  }
};
