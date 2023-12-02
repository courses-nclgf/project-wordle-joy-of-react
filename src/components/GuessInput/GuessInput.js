import React, { useState } from "react";

function GuessInput({ status, handleGuesses }) {
  const [guess, setGuess] = useState("");

  const handleGuess = (event) => {
    const newGuess = event.target.value.toUpperCase();
    setGuess(newGuess);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuess("");
    handleGuesses(guess);
  };

  const isDisabled = status !== "playing";
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={isDisabled}
        id="guess-input"
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        type="text"
        value={guess}
        onChange={handleGuess}
      />
    </form>
  );
}

export default GuessInput;
