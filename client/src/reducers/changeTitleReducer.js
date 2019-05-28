import { ADD_MOVIE_TITLE, ADD_TEMP_MOVIE_TITLE } from "../actions/types";

const initialState = {
  title: "",
  tempTitle: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_TITLE:
      return {
        ...state,
        title: state.title.replace(state.title, action.payload)
      };
    case ADD_TEMP_MOVIE_TITLE:
      return {
        ...state,
        tempTitle: state.tempTitle.replace(state.tempTitle, action.payload)
      };
    default:
      return state;
  }
}
