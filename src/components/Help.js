import React from 'react';
import './Help.css';

function Help(props) {
    return (
        <div className='help'>
            <i onClick={props.onClick} class="help-exit-buttom icon-remove-sign"></i>
            Hello
        </div>
    );
}

export default Help;