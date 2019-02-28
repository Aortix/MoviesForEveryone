import { ADD_MOVIE_TITLE } from "./types.js";

export const changeTitle = e => dispatch => {
  dispatch({
    type: ADD_MOVIE_TITLE,
    payload: e.target.value
  });
};
