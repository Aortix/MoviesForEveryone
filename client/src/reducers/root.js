import { combineReducers } from "redux";
import searchMoviesReducer from "./searchMoviesReducer.js";
import changeGenreReducer from "./changeGenreReducer.js";
import changeTitleReducer from "./changeTitleReducer.js";
import changeYearReducer from "./changeYearReducer.js";
import initialSearchReducer from "./initialSearchReducer.js";
import isCheckedReducer from "./isCheckedReducer.js";

export default combineReducers({
  changeGenre: changeGenreReducer,
  changeTitle: changeTitleReducer,
  changeYear: changeYearReducer,
  isChecked: isCheckedReducer,
  searchMovies: searchMoviesReducer,
  initialSearch: initialSearchReducer
});
