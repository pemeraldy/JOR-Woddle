import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleNewGuess = (potentialGuess) => {
    setGuesses([
      ...guesses,
      potentialGuess
    ]);
    // console.log(potentialGuess, guesses);
  };
  return (
    <>
      <GuessResult guessList={guesses} answer={answer} />
      <GuessInput handleNewSubmit={handleNewGuess} />
    </>
  );
}

export default Game;
