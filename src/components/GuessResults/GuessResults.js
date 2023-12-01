import React from "react";
import { range, id, fill } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ results }) {
  const words = range(NUM_OF_GUESSES_ALLOWED).map((i) =>
    results[i]
      ? results[i]
      : { value: fill(5, { letter: "", status: "" }), id: id() }
  );

  return (
    <div className="guess-results">
      {words.length > 0 &&
        words.map(({ value, id }) => <Guess key={id} value={value} />)}
    </div>
  );
}

export default GuessResults;
