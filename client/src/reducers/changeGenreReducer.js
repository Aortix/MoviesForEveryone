import {
  ADD_GENRE,
  DELETE_GENRE,
  ADD_TEMP_GENRE,
  DELETE_TEMP_GENRE
} from "../actions/types.js";

const initialState = {
  genre: [],
  tempGenre: []
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
    default:
      return state;
  }
}
