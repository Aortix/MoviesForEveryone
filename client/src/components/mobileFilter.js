import React from "react";

export default function mobileFilter(props) {
  if (
    !(props.movieResultsLength >= 12) &&
    props.currentApiPage !== props.totalPages &&
    props.startAndStopSearch !== 1
  ) {
    return (
      <div className="mobileFilter_container">
        <button className="mobileFilter_button mobileFilter_button-unactive">
          <span>Filter</span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="mobileFilter_container">
        <button className="mobileFilter_button" onClick={props.handleSearch}>
          <span>Filter</span>
        </button>
      </div>
    );
  }
}
