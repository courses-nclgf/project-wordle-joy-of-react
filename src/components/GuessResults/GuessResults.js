import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.length > 0 &&
        results.map(({ value, id }) => (
          <p key={id} className="guess">
            {value}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;
