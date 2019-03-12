import React from "react";

const movieTitle = props => {
  return (
    <div className="movie_search_container">
      <p className="movie_search_title">Movie Name</p>
      <form onSubmit={props.handleTitleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={props.title}
          onChange={props.handleTitleChange}
        />
      </form>
    </div>
  );
};

export default movieTitle;
