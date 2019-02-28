import { ADD_RELEASE_YEAR } from "../actions/types.js";

const initialState = {
  year: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_RELEASE_YEAR:
      console.log("Year added");
      return {
        ...state,
        year: state.year - state.year + action.payload
      };
    default:
      return state;
  }
}
