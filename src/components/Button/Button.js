import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button
        className={classes.Button}
        onClick={props.clicked}
        disabled={props.disabled}>Play again! </button>
);

export default button;
