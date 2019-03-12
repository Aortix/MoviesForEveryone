import React from "react";

export default function search(props) {
  return (
    <div className="search_container">
      <button className="search_container_button" onClick={props.handleSearch}>
        <span>Search</span>
      </button>
    </div>
  );
}
