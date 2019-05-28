import {
  SWITCH_PAGE,
  USE_PREVIOUS_STATE_GENRE,
  SET_MOVIE_LENGTH
} from "./types.js";
import { pageNumbersRegex } from "../pageNumbersRegex.js";

export const changePage = e => (dispatch, getState) => {
  if (getState().searchMovies.pageNumber.includes(e + 1)) {
    dispatch({
      type: SWITCH_PAGE,
      payload: {
        data: getState().searchMovies.movieData.filter((items, index) => {
          return pageNumbersRegex[e].test(index);
        }),
        imageData: getState().searchMovies.movieImages.filter(
          (items, index) => {
            return pageNumbersRegex[e].test(index);
          }
        ),
        number: e
      }
    });
  } else if (getState().searchMovies.startAndStopSearch !== 1) {
    dispatch({
      type: SWITCH_PAGE,
      payload: {
        data: [],
        imageData: [],
        number: e
      }
    });
    dispatch({ type: USE_PREVIOUS_STATE_GENRE });
    dispatch({ type: SET_MOVIE_LENGTH });
  } else {
    dispatch({
      type: SWITCH_PAGE,
      payload: {
        data: getState().searchMovies.movieData.filter((items, index) => {
          return pageNumbersRegex[e].test(index);
        }),
        imageData: getState().searchMovies.movieImages.filter(
          (items, index) => {
            return pageNumbersRegex[e].test(index);
          }
        ),
        number: e
      }
    });
  }
};
