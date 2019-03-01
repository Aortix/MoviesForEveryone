import React from "react";

const movieResults = props => {
  return (
    <div className="movieResults_container">
      <div className="movieResults_individual_results">
        {props.results.forEach(results => {
          return (
            <div>
              <p>{results.title}</p>
              <p>{results.overview}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/*         */
export default movieResults;
