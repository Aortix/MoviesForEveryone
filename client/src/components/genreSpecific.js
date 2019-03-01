import React from "react";

export default function genreSpecific(props) {
  return (
    <div className="genreSpecific_container">
      <button onClick={props.handleCheck} value="genre">
        Check here to show results with ONLY the selected genre/s
      </button>
    </div>
  );
}
