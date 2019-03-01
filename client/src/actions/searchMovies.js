import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./types.js";

export const searchMovies = () => (dispatch, getState) => {
  if (
    getState().isChecked.movieTitleChecked &&
    getState().isChecked.movieGenreChecked
  ) {
    dispatch({
      type: FETCH_MOVIES_REQUEST,
      payload: fetch("/search/genre-specific", {
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
        .then(res => res.text())
        .then(data => JSON.parse(data))
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
    dispatch({
      type: FETCH_MOVIES_REQUEST,
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
        .then(res => res.text())
        .then(data => JSON.parse(data))
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
    dispatch({
      type: FETCH_MOVIES_REQUEST,
      payload: fetch("/search/title-contain-genre-specific", {
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
        .then(res => res.text())
        .then(data => JSON.parse(data))
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
    dispatch({
      type: FETCH_MOVIES_REQUEST,
      payload: fetch("/search/title-contain", {
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
        .then(res => res.text())
        .then(data => JSON.parse(data))
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
};
/*dispatch({
    type: FETCH_MOVIES_REQUEST,
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
      .then(res => res.text())
      .then(data => JSON.parse(data))
      .then(data => dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data }))
      .catch(err =>
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: err
        })
      )
  });
};*/
