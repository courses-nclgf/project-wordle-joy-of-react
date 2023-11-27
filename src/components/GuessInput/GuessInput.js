import React from "react";

function GuessInput({ value, onChange, onSubmit }) {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

export default GuessInput;
