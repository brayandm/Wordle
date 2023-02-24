import React from 'react';
import './PlayAgainButton.css';

function PlayAgainButton(props) {
  return (
    <button className="start-game-button" onClick={props.onClick}>
      Play Again
    </button>
  );
}

export default PlayAgainButton;