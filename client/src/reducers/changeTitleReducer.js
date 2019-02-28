import { ADD_MOVIE_TITLE } from "../actions/types";

const initialState = {
  title: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_TITLE:
      console.log("Title added");
      return {
        ...state,
        title: state.title.replace(state.title, action.payload)
      };
    default:
      return state;
  }
}
