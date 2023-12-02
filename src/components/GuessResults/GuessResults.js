import React from "react";
import { range, id, fill } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  const blankWord = fill(5, { letter: "", status: "" });
  const words = range(NUM_OF_GUESSES_ALLOWED).map((i) =>
    guesses[i] ? guesses[i] : { value: blankWord, id: id() }
  );

  return (
    <div className="guess-results">
      {words.length > 0 &&
        words.map(({ value, id }) => <Guess key={id} guess={value} />)}
    </div>
  );
}

export default GuessResults;
