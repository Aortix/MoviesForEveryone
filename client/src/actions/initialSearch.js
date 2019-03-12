import {
  FETCH_PAGES_REQUEST,
  FETCH_PAGES_FAILURE,
  FETCH_MOVIES_START_SUCCESS
} from "./types.js";

export const initialSearch = () => (dispatch, getState) => {
  if (
    getState().isChecked.movieTitleChecked &&
    getState().isChecked.movieGenreChecked === false
  ) {
    dispatch({
      type: FETCH_PAGES_REQUEST,
      payload: fetch("/search/standard", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          page: 1,
          title: getState().changeTitle.title,
          genre: getState().changeGenre.genre,
          year: getState().changeYear.year
        })
      })
        .then(res => res.json())
        .then(data => {
          dispatch({ type: FETCH_MOVIES_START_SUCCESS, payload: data });
        })
        .catch(err => {
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  }
};
