import React from 'react';
import './Keyboard.css';

const Keyboard = ({ onClick, letterCheck }) => {
    const firstRowLetters = 'qwertyuiop'.split('');
    const secondRowLetters = 'asdfghjkl'.split('');
    const thirdRowLetters = 'zxcvbnm'.split('');

    const handleClick = (letter) => {
        onClick(letter);
    };

    const handleBackspace = () => {
        onClick('Backspace');
    };

    const handleEnter = () => {
        onClick('Enter');
    };

    return (
        <div className="keyboard-container">
            <div className="row">
                {firstRowLetters.map((letter, index) => (
                    <button key={index} className={"letter-button keyboard-key keyboard-key-" + letterCheck.get(letter.toUpperCase())} onClick={() => handleClick(letter)}>
                        {letter.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="row">
                {secondRowLetters.map((letter, index) => (
                    <button key={index} className={"letter-button keyboard-key keyboard-key-" + letterCheck.get(letter.toUpperCase())} onClick={() => handleClick(letter)}>
                        {letter.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="row">
                {thirdRowLetters.map((letter, index) => (
                    <button key={index} className={"letter-button keyboard-key keyboard-key-" + letterCheck.get(letter.toUpperCase())} onClick={() => handleClick(letter)}>
                        {letter.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="keyword-buttons">
                <button className="backspace-button keyboard-key keyboard-key-white" onClick={handleBackspace}>
                    Backspace
                </button>
                <button className="enter-button keyboard-key keyboard-key-white" onClick={handleEnter}>
                    Enter
                </button>
            </div>
        </div >
    );
};

export default Keyboard;
