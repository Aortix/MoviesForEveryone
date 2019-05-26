import React from "react";

const movieReleaseYear = props => {
  return (
    <div className="release_year_container">
      <p className="release_year_name">Release Year</p>
      <ul>
        {props.year === 0 ? (
          <li
            className="release_year_active"
            onClick={props.handleReleaseYearChange}
            value={0}
          >
            No Range
          </li>
        ) : (
          <li onClick={props.handleReleaseYearChange} value={0}>
            No Range
          </li>
        )}
        {props.year === 19 ? (
          <li
            className="release_year_active"
            onClick={props.handleReleaseYearChange}
            value={19}
          >
            1900-1999
          </li>
        ) : (
          <li onClick={props.handleReleaseYearChange} value={19}>
            1900-1999
          </li>
        )}
        {props.year === 20 ? (
          <li
            className="release_year_active"
            onClick={props.handleReleaseYearChange}
            value={20}
          >
            2000-2099
          </li>
        ) : (
          <li onClick={props.handleReleaseYearChange} value={20}>
            2000-2099
          </li>
        )}
      </ul>
    </div>
  );
};

export default movieReleaseYear;
