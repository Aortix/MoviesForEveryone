import React from "react";

export default function pageNumbers(props) {
  return (
    <div>
      {props.numbers
        .filter(numbers => {
          return Number(!isNaN(numbers));
        })
        .map(realNumbers => {
          return <span onClick={props.handleNumberClick}>{realNumbers}</span>;
        })}
    </div>
  );
}
