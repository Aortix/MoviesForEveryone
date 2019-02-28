import { ADD_GENRE, DELETE_GENRE } from "../actions/types.js";

const initialState = {
  genre: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GENRE:
      console.log("Added genre");
      return {
        ...state,
        genre: [...state.genre, action.payload]
      };
    case DELETE_GENRE:
      console.log("Deleted Genre");
      return {
        ...state,
        genre: state.genre.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
}
