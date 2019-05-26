import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  START_AND_STOP_SEARCH
} from "./types.js";

export const searchMovies = (page, title, genre, year) => (
  dispatch,
  getState
) =>
  new Promise(function(resolve, reject) {
    if (
      getState().isChecked.movieTitleChecked &&
      getState().isChecked.movieGenreChecked
    ) {
      console.log("Starting movie fetch request...");
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/genre-specific", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          },
          body: `page=${page}&title=${
            getState().changeTitle.title
          }&genre=${getState().changeGenre.genre.join()}&year=${
            getState().changeYear.year
          }`
        })
          .then(res => res.json())
          .then(data => dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data }))
          .catch(err =>
            dispatch({
              type: FETCH_MOVIES_FAILURE,
              payload: err
            })
          )
      });
    } else if (
      getState().isChecked.movieTitleChecked &&
      getState().isChecked.movieGenreChecked === false
    ) {
      console.log("Starting movie fetch request...");
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/standard", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          },
          body: `page=${page}&title=${
            getState().changeTitle.title
          }&genre=${getState().changeGenre.genre.join()}&year=${
            getState().changeYear.year
          }`
        })
          .then(res => res.json())
          .then(data => dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data }))
          .catch(err =>
            dispatch({
              type: FETCH_MOVIES_FAILURE,
              payload: err
            })
          )
      });
    } else if (
      getState().isChecked.movieTitleChecked === false &&
      getState().isChecked.movieGenreChecked
    ) {
      console.log("Starting movie fetch request...");
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/title-contain-genre-specific", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          },
          body: `page=${page}&title=${
            getState().changeTitle.title
          }&genre=${getState().changeGenre.genre.join()}&year=${
            getState().changeYear.year
          }`
        })
          .then(res => res.json())
          .then(data => dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data }))
          .catch(err =>
            dispatch({
              type: FETCH_MOVIES_FAILURE,
              payload: err
            })
          )
      });
    } else if (
      getState().isChecked.movieTitleChecked === false &&
      getState().isChecked.movieGenreChecked === false
    ) {
      console.log("Starting movie fetch request...");
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/title-contain", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          },
          body: `page=${page}&title=${
            getState().changeTitle.title
          }&genre=${getState().changeGenre.genre.join()}&year=${
            getState().changeYear.year
          }`
        })
          .then(res => res.json())
          .then(data => dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data }))
          .catch(err =>
            dispatch({
              type: FETCH_MOVIES_FAILURE,
              payload: err
            })
          )
      });
    } else {
      console.log("What happened?");
    }
  });

export const cancelSearch = action => (dispatch, getState) => {
  dispatch({ type: START_AND_STOP_SEARCH, payload: action });
};
