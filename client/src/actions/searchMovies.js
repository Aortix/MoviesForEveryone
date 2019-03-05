import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./types.js";

export const searchMovies = () => (dispatch, getState) => {
  let count = 0;
  if (
    getState().isChecked.movieTitleChecked &&
    getState().isChecked.movieGenreChecked
  ) {
    while (getState().search.results < 12 && count < 5) {
      count++;
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/genre-specific", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            page: count,
            title: getState().changeTitle.title,
            genre: getState().changeGenre.genre,
            year: getState().changeYear.year
          })
        })
          .then(res => res.json())
          .then(data =>
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data }).then(() =>
              console.log("waiting")
            )
          )
          .catch(err =>
            dispatch({
              type: FETCH_MOVIES_FAILURE,
              payload: err
            })
          )
      });
    }
  } else if (
    getState().isChecked.movieTitleChecked &&
    getState().isChecked.movieGenreChecked === false
  ) {
    while (getState().search.results < 12 && count < 5) {
      count++;
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/standard", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            page: count,
            title: getState().changeTitle.title,
            genre: getState().changeGenre.genre,
            year: getState().changeYear.year
          })
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
    }
  } else if (
    getState().isChecked.movieTitleChecked === false &&
    getState().isChecked.movieGenreChecked
  ) {
    while (getState().search.results < 12 && count < 5) {
      count++;
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/title-contain-genre-specific", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            page: count,
            title: getState().changeTitle.title,
            genre: getState().changeGenre.genre,
            year: getState().changeYear.year
          })
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
    }
  } else if (
    getState().isChecked.movieTitleChecked === false &&
    getState().isChecked.movieGenreChecked === false
  ) {
    while (getState().search.results < 12 && count < 5) {
      count++;
      dispatch({
        type: FETCH_MOVIES_REQUEST,
        payload: fetch("/search/title-contain", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            page: count,
            title: getState().changeTitle.title,
            genre: getState().changeGenre.genre,
            year: getState().changeYear.year
          })
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
    }
  } else {
    count++;
    console.log("What happened?");
  }
};
