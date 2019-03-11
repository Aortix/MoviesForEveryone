import React from "react";

export default function search(props) {
  return (
    <div className="search_container">
      <button onClick={props.handleSearch}>Search</button>
    </div>
  );
}
