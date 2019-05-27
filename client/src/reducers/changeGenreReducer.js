import {
  ADD_GENRE,
  DELETE_GENRE,
  ADD_TEMP_GENRE,
  DELETE_TEMP_GENRE,
  ADD_PREVIOUS_STATE_GENRE,
  USE_PREVIOUS_STATE_GENRE
} from "../actions/types.js";

const initialState = {
  genre: [],
  tempGenre: [],
  previousState: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GENRE:
      return {
        ...state,
        genre: Array.from(state.tempGenre)
      };
    case DELETE_GENRE:
      return {
        ...state,
        genre: Array.from(state.tempGenre)
      };
    case ADD_TEMP_GENRE:
      return {
        ...state,
        tempGenre: [...state.tempGenre, action.payload]
      };

    case DELETE_TEMP_GENRE:
      return {
        ...state,
        tempGenre: state.tempGenre.filter(item => item !== action.payload)
      };
    case ADD_PREVIOUS_STATE_GENRE:
      return {
        ...state,
        previousState: Array.from(state.genre)
      };
    case USE_PREVIOUS_STATE_GENRE:
      return {
        ...state,
        genre: state.previousState
      };
    default:
      return state;
  }
}
