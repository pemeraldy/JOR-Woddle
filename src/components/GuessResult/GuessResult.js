import React from "react";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResult({ guessList, answer }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} guess={guessList[num]} answer={answer} />
        ))}
      </div>
    </div>
  );
}

export default GuessResult;
