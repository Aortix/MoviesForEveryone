import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actions/types.js";

const initialState = {
  results: 0,
  currentApiPage: 0,
  data: [],
  imageUrl: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      console.log("Request Sent!");
      return state;
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        results: state.results + Array.from(action.payload).length,
        currentApiPage: state.currentApiPage + 1,
        data: [...state.data, Array.from(action.payload)],
        imageUrl: [
          ...state.imageUrl,
          Array.from(action.payload).map(images => {
            return "https://image.tmdb.org/t/p/w92/" + images.poster_path;
          })
        ]
      };
    case FETCH_MOVIES_FAILURE:
      return console.log(action.payload);
    default:
      return state;
  }
}
