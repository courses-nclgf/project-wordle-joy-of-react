import React, { useState } from "react";
import { sample, id } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const handleGuess = (event) => {
    const newGuess = event.target.value.toUpperCase();
    setGuess(newGuess);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuess("");
    setGuesses([
      ...guesses,
      {
        value: checkGuess(guess, answer),
        id: id(),
      },
    ]);
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        value={guess}
        onChange={handleGuess}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
