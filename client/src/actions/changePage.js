import { SWITCH_PAGE } from "./types.js";
import { pageNumbersRegex } from "../pageNumbersRegex.js";
import { searchMovies } from "./searchMovies.js";

export const changePage = e => (dispatch, getState) => {
  if (getState().searchMovies.pageNumber.includes(e + 1)) {
    console.log("Page Changed!");
    console.log(e);
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
  } else {
    dispatch({
      type: SWITCH_PAGE,
      payload: {
        data: [],
        imageData: [],
        number: e
      }
    });
    console.log("dispensed update pages, now doing searchMovies!");
    dispatch(
      searchMovies(
        getState().searchMovies.currentApiPage,
        getState().changeTitle.title,
        getState().changeGenre.genre,
        getState().changeYear.year
      )
    );
  }
};
