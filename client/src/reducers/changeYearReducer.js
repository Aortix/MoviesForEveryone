import { ADD_RELEASE_YEAR, ADD_TEMP_RELEASE_YEAR } from "../actions/types.js";

const initialState = {
  year: 0,
  tempYear: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_RELEASE_YEAR:
      return {
        ...state,
        year: action.payload
      };
    case ADD_TEMP_RELEASE_YEAR: {
      return {
        ...state,
        tempYear: state.tempYear - state.tempYear + action.payload
      };
    }
    default:
      return state;
  }
}
