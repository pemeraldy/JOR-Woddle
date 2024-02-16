import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setGuess("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:{guess}</label>
        <input value={guess} required minLength={5} maxLength={5} onChange={(e) => setGuess(e.target.value.toUpperCase())} id="guess-input" type="text" />
      </form>
    </div>
  );
}

export default GuessInput;
