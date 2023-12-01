import React from "react";

function Guess({ value, id }) {
  return (
    <p key={id} className="guess">
      {value.split("").map((letter, i) => (
        <span key={i} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
