import React from 'react';
import classes from './GameBoard.module.css';
import Field from './Field/Field';

const gameBoard = (props) => {
    let multipleClasses = [classes.GameBoard];

    if (props.lineWon) {
        multipleClasses.pop();
        switch(props.lineWon) {
            case "horizontal1":
                multipleClasses.push(classes.HorizontalLine1);
                break;
            case "horizontal2":
                multipleClasses.push(classes.HorizontalLine2);
                break;
            case "horizontal3":
                multipleClasses.push(classes.HorizontalLine3);
                break;
            case "vertical1":
                multipleClasses.push(classes.VerticalLine1);
                break;
            case "vertical2":
                multipleClasses.push(classes.VerticalLine2);
                break;
            case "vertical3":
                multipleClasses.push(classes.VerticalLine3);
                break;
            case "diagonal1":
                multipleClasses.push(classes.DiagonalLine1);
                break;
            case "diagonal2":
                multipleClasses.push(classes.DiagonalLine2);
                break;
            default:
                break;
        }
    }

    multipleClasses.join(' ');

    return(
        <div className={multipleClasses}>
            <Field
                fieldNo='Field_1'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_2'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_3'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_4'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_5'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_6'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_7'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_8'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
            <Field
                fieldNo='Field_9'
                mouseHover={props.mouseHover}
                clicked={props.clicked}
                gameReset={props.gameReset} />
        </div>
    );
}

export default gameBoard;
