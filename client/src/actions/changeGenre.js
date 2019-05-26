import {
  ADD_GENRE,
  DELETE_GENRE,
  ADD_TEMP_GENRE,
  DELETE_TEMP_GENRE
} from "./types.js";

export const changeGenre = e => dispatch => {
  if (e.target.checked === true) {
    dispatch({
      type: ADD_TEMP_GENRE,
      payload: e.target.value
    });
  } else {
    dispatch({
      type: DELETE_TEMP_GENRE,
      payload: e.target.value
    });
  }
};
