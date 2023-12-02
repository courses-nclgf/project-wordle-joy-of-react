import React from "react";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map(({ letter, status }, id) => (
        <Cell key={id} letter={letter} status={status} />
      ))}
    </p>
  );
}

export default Guess;
