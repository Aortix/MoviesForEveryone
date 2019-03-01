import React from "react";

export default function titleContain(props) {
  return (
    <div className="titleContain_container">
      <button onClick={props.handleCheck} value="title">
        Check here to show movies that START with specified title
      </button>
    </div>
  );
}
