import React from "react";

import { range } from "../../utils";
import {checkGuess} from '../../game-helpers'

const Cell = ({letter, status}) => {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer)    
  return (
    <div className="guess">
      {range(5).map((indx) => (
        <Cell key={indx} letter={result ? result[indx].letter : undefined} status={result ? result[indx].status : undefined} />
      ))}
    </div>
  );
}

export default Guess;
