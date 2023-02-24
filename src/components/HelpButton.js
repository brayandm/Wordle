import React from 'react';
import './HelpButton.css';

function HelpButton(props) {
    return (
        <i onClick={props.onClick} class="help icon-question-sign"></i>
    );
}

export default HelpButton;