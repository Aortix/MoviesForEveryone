import { ADD_RELEASE_YEAR } from "./types.js";

export const changeYear = e => dispatch => {
  dispatch({
    type: ADD_RELEASE_YEAR,
    payload: e.target.value
  });
};
