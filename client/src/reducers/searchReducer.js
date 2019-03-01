import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actions/types.js";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      console.log("Request Sent!");
    case FETCH_MOVIES_SUCCESS:
      /*let newData = Object.assign({}, action.payload);
      return { ...state, data: newData };*/
      return { ...state, data: Array.from(action.payload) };
    case FETCH_MOVIES_FAILURE:
      return console.log(action.payload);
    default:
      return state;
  }
}
