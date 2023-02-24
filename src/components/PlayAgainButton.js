import React from 'react';
import './PlayAgainButton.css';

function PlayAgainButton(props) {
  return (
    <i onClick={props.onClick} class="play-again icon-play-sign"></i>
  );
}

export default PlayAgainButton;