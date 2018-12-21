import React from 'react';
import classes from './Field.module.css';

const field = (props) => {
    const multipleClasses=[classes.Field, classes[props.fieldNo]].join(' ');

    return (
        <div className={multipleClasses}></div>
    );
}

export default field;
