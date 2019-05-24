import React from "react";

const websiteTitle = props => {
  return (
    <div className="websiteTitle_container">
      <img
        id="TMDB-logo"
        src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png"
        alt="TMDB logo"
        width="160"
        height="60"
      />
      <h1>
        <span className="websiteTitle_title">MoviesForEveryone</span>
      </h1>
      <h2 className="websiteTitle_quote">Find a movie you will love.</h2>
    </div>
  );
};

export default websiteTitle;
