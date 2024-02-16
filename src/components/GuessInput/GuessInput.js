import React, { useState } from "react";

function GuessInput({ handleNewSubmit }) {
  const [potentialGuess, setPotentialGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewSubmit(potentialGuess);
    setPotentialGuess("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:{potentialGuess}</label>
        <input value={potentialGuess} required minLength={5} maxLength={5} onChange={(e) => setPotentialGuess(e.target.value.toUpperCase())} id="guess-input" type="text" />
      </form>
    </div>
  );
}

export default GuessInput;
