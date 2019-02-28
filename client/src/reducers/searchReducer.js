import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actions/types.js";

const initialState = {
  data: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      console.log("Request Sent!");
    case FETCH_MOVIES_SUCCESS:
      let newData = Object.assign({}, state.data, action.payload);
      return { ...state, data: newData };
    case FETCH_MOVIES_FAILURE:
      return console.log(action.payload);
    default:
      return state;
  }
}
