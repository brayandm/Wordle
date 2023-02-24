import React from 'react';
import './Help.css';

function Help(props) {
    return (
        <div className='help'>
            <i onClick={props.onClick} class="help-exit-buttom icon-remove-sign"></i>
            <div className='container'>
                <h1>Rules of Wordle</h1>
                <ul>
                    <li>The objective of the game is to guess a five-letter word chosen by the computer, with the least amount of attempts possible.</li>
                    <li>You have six attempts to guess the word.</li>
                    <li>Each time you make a guess, the computer will provide feedback by highlighting the letters in your guess in different colors to indicate if they are:
                        <ul>
                            <li class="green">Correct and in the correct position (highlighted in green)</li>
                            <li class="yellow">Correct but in the wrong position (highlighted in yellow)</li>
                            <li class="red">Incorrect (highlighted in red)</li>
                        </ul>
                    </li>
                    <li>Based on the feedback provided, you can use deduction and logic to make your next guess.</li>
                    <li>The game ends when you correctly guess the word or run out of attempts.</li>
                </ul>
            </div>
        </div>
    );
}

export default Help;