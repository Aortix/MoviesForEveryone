import React from "react";

const movieTitle = props => {
  return (
    <div className="movie_search_container">
      <p className="movie_search_title">Movie Name</p>
      <form onSubmit={props.handleTitleSubmit}>
        <input
          id="movie_search_input"
          type="text"
          placeholder="Random..."
          value={props.title}
          onChange={props.handleTitleChange}
        />
      </form>
    </div>
  );
};

export default movieTitle;
