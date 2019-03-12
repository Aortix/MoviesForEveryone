import React from "react";

export default function mobileFilter(props) {
  return (
    <div className="mobileFilter_container">
      <button className="mobileFilter_button" onClick={props.handleSearch}>
        <span>Filter</span>
      </button>
    </div>
  );
}
