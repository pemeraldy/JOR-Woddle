import React from 'react';

function GuessResult({guessList}) {
  return (
    <div>
      <div class="guess-results">
        {/* <p class="guess">FIRST</p> */}
        {guessList.map((guess,i) => <p key={i} class="guess">{guess}</p>)}
      </div>
    </div>
  );
}

export default GuessResult;
