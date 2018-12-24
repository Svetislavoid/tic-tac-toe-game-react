import React, {Component} from 'react';
import classes from './Field.module.css';

class Field extends Component {

    mouseHoverHandler = (event) => {
        this.props.mouseHover(event, [classes.XFieldBackground, classes.OFieldBackground]);
    }

    clickHandler = (event) => {
        this.props.clicked(event);
    }

    render () {
        let multipleClasses = [classes.Field, classes[this.props.fieldNo]];
        multipleClasses = multipleClasses.join(' ');

        if (this.props.gameReset) {
            this.field.classList.remove(classes.XFieldBackground, classes.OFieldBackground);
        }

        return (
            <div
                ref={(field) => {this.field = field}}
                className={multipleClasses}
                onMouseOver={this.mouseHoverHandler.bind(this)}
                onMouseOut={this.mouseHoverHandler.bind(this)}
                onClick={this.clickHandler.bind(this)}
                id={this.props.fieldNo}
                >
            </div>
        );
    }
}

export default Field;
