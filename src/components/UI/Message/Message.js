import React from 'react';
import classes from './Message.module.css';

const message = (props) => {
    let multipleClasses = [classes.Message, classes[props.winner]].join(' ');

    return (
        <div className={multipleClasses}>{props.msg}</div>
    );
}

export default message;
