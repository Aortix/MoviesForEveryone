import React from "react";

export default function filter(props) {
  return (
    <div className="filter_container">
      <button onClick={props.handleFilter} className="filter_button">Filter</button>
    </div>
  );
}