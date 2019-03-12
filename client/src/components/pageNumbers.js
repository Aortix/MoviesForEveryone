import React from "react";

export default function pageNumbers(props) {
  return (
    <div className="pageNumbers_container">
      <p className="pageNumbers_individual_numbers">
        {props.numbers
          .filter(numbers => {
            return numbers !== null;
          })
          .map(realNumbers => {
            return (
              <span
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
