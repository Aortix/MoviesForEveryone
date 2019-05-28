import React from "react";

export default function search(props) {
  if (
    !(props.movieResultsLength >= 12) &&
    props.currentApiPage !== props.totalPages &&
    props.startAndStopSearch !== 1
  ) {
    return (
      <div className="search_container">
        <button className="search_container_button search_container_button-unactive">
          <span>Search</span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="search_container">
        {Object.keys(props.errors).length > 0 ? (
          <p className="search-errors">Error in the filters.</p>
        ) : null}
        <button
          className="search_container_button"
          onClick={props.handleSearch}
        >
          Search
        </button>
      </div>
    );
  }
}
