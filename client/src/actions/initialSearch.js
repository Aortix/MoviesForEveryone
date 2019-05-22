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
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        },
        body: `page=1&title=${
          getState().changeTitle.title
        }&genre=${getState().changeGenre.genre.join()}&year=${
          getState().changeYear.year
        }`
      })
        .then(data => data.json())
        .then(data => {
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  } else if (
    getState().isChecked.movieTitleChecked === false &&
    getState().isChecked.movieGenreChecked
  ) {
    dispatch({
      type: FETCH_PAGES_REQUEST,
      payload: fetch("/search/title-contain-genre-specific", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        },
        body: `page=1&title=${
          getState().changeTitle.title
        }&genre=${getState().changeGenre.genre.join()}&year=${
          getState().changeYear.year
        }`
      })
        .then(data => data.json())
        .then(data => {
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  } else if (
    getState().isChecked.movieTitleChecked &&
    getState().isChecked.movieGenreChecked
  ) {
    dispatch({
      type: FETCH_PAGES_REQUEST,
      payload: fetch("/search/genre-specific", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        },
        body: `page=1&title=${
          getState().changeTitle.title
        }&genre=${getState().changeGenre.genre.join()}&year=${
          getState().changeYear.year
        }`
      })
        .then(data => data.json())
        .then(data => {
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  } else if (
    getState().isChecked.movieTitleChecked === false &&
    getState().isChecked.movieGenreChecked === false
  ) {
    dispatch({
      type: FETCH_PAGES_REQUEST,
      payload: fetch("/search/title-contain", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        },
        body: `page=1&title=${
          getState().changeTitle.title
        }&genre=${getState().changeGenre.genre.join()}&year=${
          getState().changeYear.year
        }`
      })
        .then(data => data.json())
        .then(data => {
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  }
};
