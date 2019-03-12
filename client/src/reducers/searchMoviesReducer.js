import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_START_SUCCESS,
  SWITCH_PAGE
} from "../actions/types.js";

const initialState = {
  totalPages: 0,
  currentPage: 0,
  movieResultsLength: 0,
  currentApiPage: 0,
  currentApiPageCount: 0,
  pageNumberCount: 1,
  pageNumber: [],
  pageNumberClicked: [],
  movieData: [],
  movieImages: [],
  movieDataToDisplay: [],
  movieImagesToDisplay: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      console.log("Request for movies sent!");
      return state;
    case FETCH_MOVIES_START_SUCCESS:
      return {
        ...state,
        totalPages: action.payload.total_pages,
        currentPage: 1,
        movieResultsLength: 0,
        currentApiPage: 1,
        currentApiPageCount: 1,
        pageNumberCount: 1,
        pageNumber: [1],
        pageNumberClicked: [1],
        movieData: [],
        movieImages: [],
        movieDataToDisplay: [],
        movieImagesToDisplay: []
      };
    case FETCH_MOVIES_SUCCESS:
      console.log("Request for movies successful!");
      return {
        ...state,
        movieResultsLength: (state.movieResultsLength =
          state.movieResultsLength >= 12
            ? 0 + action.payload.data.length
            : state.movieResultsLength + action.payload.data.length),
        currentApiPage: state.currentApiPage + 1,
        currentApiPageCount: (state.currentApiPageCount =
          state.currentApiPageCount === 40 ? 1 : state.currentApiPageCount + 1),
        pageNumberCount: (state.pageNumberCount =
          state.movieResultsLength >= 12
            ? state.pageNumberCount + 1
            : state.pageNumberCount),
        pageNumber: [
          ...state.pageNumber,
          state.movieResultsLength >= 12 ? state.pageNumberCount : null
        ],
        movieData: [...state.movieData, ...action.payload.data],
        movieImages: [
          ...state.movieImages,
          ...Array.from(action.payload.data).map(images => {
            return "https://image.tmdb.org/t/p/w92/" + images.poster_path;
          })
        ],
        movieDataToDisplay: [
          ...state.movieDataToDisplay,
          ...action.payload.data
        ],
        movieImagesToDisplay: [
          ...state.movieImagesToDisplay,
          ...Array.from(action.payload.data).map(images => {
            return "https://image.tmdb.org/t/p/w92/" + images.poster_path;
          })
        ]
      };
    case FETCH_MOVIES_FAILURE:
      console.log("Something went wrong with movie fetch!");
      return action.payload;
    case SWITCH_PAGE:
      return {
        ...state,
        currentPage: action.payload.number,
        movieDataToDisplay: [...action.payload.data],
        movieImagesToDisplay: [...action.payload.imageData]
      };
    default:
      return state;
  }
}
