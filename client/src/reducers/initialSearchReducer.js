import {
  FETCH_PAGES_REQUEST,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_FAILURE,
  CLEAR_ERRORS
} from "../actions/types.js";

const initialState = {
  initialTotalPages: 0,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGES_REQUEST:
      console.log("Request for pages sent!");
      return state;
    case FETCH_PAGES_SUCCESS:
      console.log("Request for pages successful!");
      return {
        ...state,
        totalPages: action.payload.total_pages
      };
    case FETCH_PAGES_FAILURE:
      console.log("Error with page fetching");
      return {
        ...state,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {}
      };
    default:
      return state;
  }
}
