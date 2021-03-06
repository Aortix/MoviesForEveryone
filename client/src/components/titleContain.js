import React from "react";

export default function titleContain(props) {
  return (
    <div className="titleContain_container">
      <input
        id="title-checkbox"
        type="checkbox"
        onClick={props.handleCheck}
        value="title"
      />
      <span className="titleContain_text">
        Show movies that BEGIN with the name above
      </span>
    </div>
  );
}
