import React from "react";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ value }) {
  console.log(value);
  return (
    <p className="guess">
      {value.map(({ letter, status }, id) => (
        <Cell key={id} letter={letter} status={status} />
      ))}
    </p>
  );
}

export default Guess;
