import { combineReducers } from "redux";
import searchReducer from "./searchReducer.js";
import changeGenreReducer from "./changeGenreReducer.js";
import changeTitleReducer from "./changeTitleReducer.js";
import changeYearReducer from "./changeYearReducer.js";

export default combineReducers({
  search: searchReducer,
  changeGenre: changeGenreReducer,
  changeTitle: changeTitleReducer,
  changeYear: changeYearReducer
});
