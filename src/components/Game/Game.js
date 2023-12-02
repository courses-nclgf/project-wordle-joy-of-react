import React, { useState } from "react";
import { sample, id } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("playing");

  const handleGuesses = (guess) => {
    const newGuesses = [
      ...guesses,
      {
        value: checkGuess(guess, answer),
        id: id(),
      },
    ];
    setGuesses(newGuesses);
    setStatus(
      guess === answer
        ? "won"
        : newGuesses.length >= NUM_OF_GUESSES_ALLOWED
        ? "lost"
        : "playing"
    );
  };

  const handleRestart = () => {
    setGuesses([]);
    setStatus("playing");
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput status={status} handleGuesses={handleGuesses} />
      <Banner
        status={status}
        tentatives={guesses.length}
        answer={answer}
        handleRestart={handleRestart}
      />
    </>
  );
}

export default Game;
