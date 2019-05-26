import React from "react";

export default function pageNumbers(props) {
  if (
    !(props.movieResultsLength >= 12) &&
    props.currentApiPage !== props.totalPages &&
    props.startAndStopSearch !== 1
  ) {
    return (
      <div className="pageNumbers_container">
        <p className="pageNumbers_individual_numbers">
          {props.numbers
            .filter(numbers => numbers !== null)
            .map((realNumbers, index) => {
              return (
                <span
                  key={index}
                  id={`pageNumber-${index + 1}`}
                  className="pageNumbers_real_numbers"
                >
                  {realNumbers}
                </span>
              );
            })}
        </p>
      </div>
    );
  } else {
    return (
      <div className="pageNumbers_container">
        <p className="pageNumbers_individual_numbers">
          {props.numbers
            .filter(numbers => numbers !== null)
            .map((realNumbers, index) => {
              return (
                <span
                  key={index}
                  id={`pageNumber-${index + 1}`}
                  className="pageNumbers_real_numbers"
                  onClick={props.handleNumberClick}
                >
                  {realNumbers}
                </span>
              );
            })}
        </p>
      </div>
    );
  }
}
