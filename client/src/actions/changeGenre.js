import { ADD_GENRE, DELETE_GENRE } from "./types.js";

export const changeGenre = e => dispatch => {
  if (e.target.checked === true) {
    dispatch({
      type: ADD_GENRE,
      payload: e.target.value
    });
  } else {
    dispatch({
      type: DELETE_GENRE,
      payload: e.target.value
    });
  }
};
