import React from "react";

export default function genreSpecific(props) {
  return (
    <div className="genreSpecific_container">
      <input type="checkbox" onClick={props.handleCheck} value="genre" />
      <span className="genreSpecific_genre">
        Show movies with ONLY these genre/s
      </span>
      <p className="genreSpecific_genre">
        (If checked, expect a significant slowdown finding results)
      </p>
    </div>
  );
}
