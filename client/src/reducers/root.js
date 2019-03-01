import { combineReducers } from "redux";
import searchReducer from "./searchReducer.js";
import changeGenreReducer from "./changeGenreReducer.js";
import changeTitleReducer from "./changeTitleReducer.js";
import changeYearReducer from "./changeYearReducer.js";
import isCheckedReducer from "./isCheckedReducer.js";

export default combineReducers({
  changeGenre: changeGenreReducer,
  changeTitle: changeTitleReducer,
  changeYear: changeYearReducer,
  isChecked: isCheckedReducer,
  search: searchReducer
});
