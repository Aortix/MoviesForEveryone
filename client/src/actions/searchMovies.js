import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./types.js";

export const searchMovies = (page, title, genre, year) => (
  dispatch,
  getState
) =>
  new Promise(function(resolve, reject) {
    let count = 0;
    if (
      getState().isChecked.movieTitleChecked &&
      getState().isChecked.movieGenreChecked
    ) {
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
    } else if (
      getState().isChecked.movieTitleChecked === false &&
      getState().isChecked.movieGenreChecked === false
    ) {
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
    } else {
      console.log("What happened?");
    }
  });
