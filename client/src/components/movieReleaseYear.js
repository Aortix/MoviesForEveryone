import React from "react";

const movieReleaseYear = props => {
  return (
    <div className="release_year_container">
      <div className="release_year_dropdown_options">
        <ul>
          <li onClick={props.handleReleaseYearChange} value={0}>
            No Range
          </li>
          <li onClick={props.handleReleaseYearChange} value={18}>
            1800-1899
          </li>
          <li onClick={props.handleReleaseYearChange} value={19}>
            1900-1999
          </li>
          <li onClick={props.handleReleaseYearChange} value={20}>
            2000-2099
          </li>
        </ul>
      </div>
    </div>
  );
};

export default movieReleaseYear;
