import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('running');

  const handleNewGuess = (potentialGuess) => {
    const nextGuesses = [...guesses, potentialGuess]
    setGuesses(
      nextGuesses
    );
    if(potentialGuess.toUpperCase() === answer){
      setGameStatus('won')
      return
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
      return;
    }
    // console.log(potentialGuess, guesses);
  };
  return (
    <>
      {gameStatus}
      <GuessResult guessList={guesses} answer={answer} />
      <GuessInput disabled={gameStatus !== 'running' } handleNewSubmit={handleNewGuess} />
    </>
  );
}

export default Game;
