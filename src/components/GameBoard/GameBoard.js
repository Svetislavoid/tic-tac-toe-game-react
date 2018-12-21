import React from 'react';
import classes from './GameBoard.module.css';
import Field from './Field/Field';

const gameBoard = (props) => (
    <div className={classes.GameBoard}>
        <Field fieldNo='Field1'/>
        <Field fieldNo='Field2'/>
        <Field fieldNo='Field3'/>
        <Field fieldNo='Field4'/>
        <Field fieldNo='Field5'/>
        <Field fieldNo='Field6'/>
        <Field fieldNo='Field7'/>
        <Field fieldNo='Field8'/>
        <Field fieldNo='Field9'/>
    </div>
);

export default gameBoard;
