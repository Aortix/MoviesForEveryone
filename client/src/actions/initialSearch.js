import {
  FETCH_PAGES_REQUEST,
  FETCH_PAGES_FAILURE,
  FETCH_MOVIES_START_SUCCESS,
  START_AND_STOP_SEARCH,
  STOP_SEARCH,
  CLEAR_ERRORS,
  ADD_GENRE,
  ADD_MOVIE_TITLE,
  CHECK_MOVIE_TITLE,
  CHECK_MOVIE_GENRE,
  ADD_RELEASE_YEAR,
  ADD_TEMP_MOVIE_TITLE,
  ADD_TEMP_GENRE,
  ADD_PREVIOUS_STATE_GENRE,
  USE_PREVIOUS_STATE_GENRE
} from "./types.js";

export const initialSearch = () => (dispatch, getState) => {
  let problem = 0;

  if (
    getState().isChecked.movieTitleChecked &&
    getState().isChecked.movieGenreChecked === false
  ) {
    dispatch({ type: CLEAR_ERRORS });
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
        .then(data => {
          if (data.status === 400) {
            problem = 1;
            dispatch({ type: STOP_SEARCH, payload: 1 });
          }
          return data.json();
        })
        .then(data => {
          if (problem === 1 && data.title !== undefined) {
            dispatch({
              type: ADD_MOVIE_TITLE,
              payload: getState().changeTitle.tempTitle
            });
            throw data;
          } else if (problem === 1 && data.genre !== undefined) {
            throw data;
          } else {
            dispatch({ type: START_AND_STOP_SEARCH, payload: 0 });
            dispatch({
              type: ADD_TEMP_MOVIE_TITLE,
              payload: getState().changeTitle.title
            });
            dispatch({ type: ADD_PREVIOUS_STATE_GENRE });
          }
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  } else if (
    getState().isChecked.movieTitleChecked === false &&
    getState().isChecked.movieGenreChecked
  ) {
    let problem = 0;

    dispatch({ type: CLEAR_ERRORS });
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
        .then(data => {
          if (data.status === 400) {
            problem = 1;
            dispatch({ type: STOP_SEARCH, payload: 1 });
          }
          return data.json();
        })
        .then(data => {
          if (problem === 1 && data.title !== undefined) {
            dispatch({
              type: ADD_MOVIE_TITLE,
              payload: getState().changeTitle.tempTitle
            });
            throw data;
          } else if (problem === 1 && data.genre !== undefined) {
            throw data;
          } else {
            dispatch({ type: START_AND_STOP_SEARCH, payload: 0 });
            dispatch({
              type: ADD_TEMP_MOVIE_TITLE,
              payload: getState().changeTitle.title
            });
            dispatch({ type: ADD_PREVIOUS_STATE_GENRE });
          }
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  } else if (
    getState().isChecked.movieTitleChecked &&
    getState().isChecked.movieGenreChecked
  ) {
    let problem = 0;

    dispatch({ type: CLEAR_ERRORS });
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
        .then(data => {
          if (data.status === 400) {
            problem = 1;
            dispatch({ type: STOP_SEARCH, payload: 1 });
          }
          return data.json();
        })
        .then(data => {
          if (problem === 1 && data.title !== undefined) {
            dispatch({
              type: ADD_MOVIE_TITLE,
              payload: getState().changeTitle.tempTitle
            });
            throw data;
          } else if (problem === 1 && data.genre !== undefined) {
            throw data;
          } else {
            dispatch({ type: START_AND_STOP_SEARCH, payload: 0 });
            dispatch({
              type: ADD_TEMP_MOVIE_TITLE,
              payload: getState().changeTitle.title
            });
            dispatch({ type: ADD_PREVIOUS_STATE_GENRE });
          }
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  } else if (
    getState().isChecked.movieTitleChecked === false &&
    getState().isChecked.movieGenreChecked === false
  ) {
    let problem = 0;

    dispatch({ type: CLEAR_ERRORS });
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
        .then(data => {
          if (data.status === 400) {
            problem = 1;
            dispatch({ type: STOP_SEARCH, payload: 1 });
          }
          return data.json();
        })
        .then(data => {
          if (problem === 1 && data.title !== undefined) {
            dispatch({
              type: ADD_MOVIE_TITLE,
              payload: getState().changeTitle.tempTitle
            });
            throw data;
          } else if (problem === 1 && data.genre !== undefined) {
            throw data;
          } else {
            dispatch({ type: START_AND_STOP_SEARCH, payload: 0 });
            dispatch({
              type: ADD_TEMP_MOVIE_TITLE,
              payload: getState().changeTitle.title
            });
            dispatch({ type: ADD_PREVIOUS_STATE_GENRE });
          }
          dispatch({
            type: FETCH_MOVIES_START_SUCCESS,
            payload: data
          });
        })
        .catch(err => {
          dispatch({ type: FETCH_PAGES_FAILURE, payload: err });
        })
    });
  }
};

export const startSearch = (title, year) => (dispatch, getState) => {
  dispatch({ type: ADD_GENRE });
  dispatch({ type: ADD_MOVIE_TITLE, payload: title });
  dispatch({ type: CHECK_MOVIE_TITLE });
  dispatch({ type: CHECK_MOVIE_GENRE });
  dispatch({ type: ADD_RELEASE_YEAR, payload: year });

  dispatch(initialSearch());
};
