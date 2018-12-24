import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Score from '../../components/Score/Score';
import GameBoard from '../../components/GameBoard/GameBoard';
import classes from './Game.module.css';
import Button from '../../components/Button/Button';
import Message from '../../components/UI/Message/Message';

class Game extends Component {
    state = {
        xTurn: true,
        gameOver: false,
        gameReset: false,
        msg: "",
        winner: "",
        lineWon: "",
        fieldsArr: [],
        score: {
            x: 0,
            o: 0
        }
    }

    clickHandler(event) {
        if (!this.state.gameOver) {
            const modifiedFieldsArr = [...this.state.fieldsArr];
            const clickedField = event.target.id.split('_')[1];

            if (!this.state.fieldsArr[clickedField - 1]) {
                this.state.xTurn ?
                    modifiedFieldsArr[clickedField - 1] = 'x':
                    modifiedFieldsArr[clickedField - 1] = 'o';

                this.setState({
                    xTurn: !this.state.xTurn,
                    gameReset: false,
                    fieldsArr: modifiedFieldsArr
                });
            }
        }
    }

    mouseHoverHandler(event, fieldClasses) {
        if (!this.state.gameOver) {
            const hoveredField = event.target.id.split('_')[1];

            if (!this.state.fieldsArr[hoveredField - 1]) {
                if (event.type === 'mouseover') {
                    if (this.state.xTurn) {
                        event.target.classList.add(fieldClasses[0]);
                    } else {
                        event.target.classList.add(fieldClasses[1]);
                    }
                } else {
                    event.target.classList.remove(...fieldClasses);
                }
            }
        }
    }

    checkGameState() {
        const field1 = this.state.fieldsArr[0];
        const field2 = this.state.fieldsArr[1];
        const field3 = this.state.fieldsArr[2];
        const field4 = this.state.fieldsArr[3];
        const field5 = this.state.fieldsArr[4];
        const field6 = this.state.fieldsArr[5];
        const field7 = this.state.fieldsArr[6];
        const field8 = this.state.fieldsArr[7];
        const field9 = this.state.fieldsArr[8];
        let isGameWon = false;

        if (field1 && field2 && field3 &&
            field1 === field2 && field2 === field3) {
            this.setState({
                gameOver: true,
                msg: field1.toUpperCase() + " wins!",
                winner: field1.toUpperCase(),
                lineWon: "horizontal1"
            });
            this.updateScore(field1);
            isGameWon = true;
        }

        if (field4 && field5 && field6 &&
            field4 === field5 && field5 === field6) {
            this.setState({
                gameOver: true,
                msg: field4.toUpperCase() + " wins!",
                winner: field4.toUpperCase(),
                lineWon: "horizontal2"
            });
            this.updateScore(field4);
            isGameWon = true;
        }

        if (field7 && field8 && field9 &&
            field7 === field8 && field8 === field9) {
            this.setState({
                gameOver: true,
                msg: field7.toUpperCase() + " wins!",
                winner: field7.toUpperCase(),
                lineWon: "horizontal3"
            });
            this.updateScore(field7);
            isGameWon = true;
        }

        if (field1 && field4 && field7 &&
            field1 === field4 && field4 === field7) {
            this.setState({
                gameOver: true,
                msg: field1.toUpperCase() + " wins!",
                winner: field1.toUpperCase(),
                lineWon: "vertical1"
            });
            this.updateScore(field1);
            isGameWon = true;
        }

        if (field2 && field5 && field8 &&
            field2 === field5 && field5 === field8) {
            this.setState({
                gameOver: true,
                msg: field2.toUpperCase() + " wins!",
                winner: field2.toUpperCase(),
                lineWon: "vertical2"
            });
            this.updateScore(field2);
            isGameWon = true;
        }

        if (field3 && field6 && field9 &&
            field3 === field6 && field6 === field9) {
            this.setState({
                gameOver: true,
                msg: field3.toUpperCase() + " wins!",
                winner: field3.toUpperCase(),
                lineWon: "vertical3"
            });
            this.updateScore(field3);
            isGameWon = true;
        }

        if (field1 && field5 && field9 &&
            field1 === field5 && field5 === field9) {
            this.setState({
                gameOver: true,
                msg: field1.toUpperCase() + " wins!",
                winner: field1.toUpperCase(),
                lineWon: "diagonal1"
            });
            this.updateScore(field1);
            isGameWon = true;
        }

        if (field3 && field5 && field7 &&
            field3 === field5 && field5 === field7) {
            this.setState({
                gameOver: true,
                msg: field3.toUpperCase() + " wins!",
                winner: field3.toUpperCase(),
                lineWon: "diagonal2"
            });
            this.updateScore(field3);
            isGameWon = true;
        }

        if (!isGameWon && !this.state.gameOver && field1 && field2 && field3 &&
            field4 && field5 && field6 && field7 && field8 && field9) {
            this.setState({
                gameOver: true,
                msg: "It's a tie!"
            });
        }
    }

    updateScore(winner) {
        const score = {...this.state.score}

        score[winner]++;
        this.setState({score: score});
    }

    playAgain() {
        this.setState({
            xTurn: true,
            gameOver: false,
            gameReset: true,
            msg: "",
            winner: "",
            lineWon: "",
            fieldsArr: []
        });
    }

    componentDidUpdate() {
        if (!this.state.gameOver) {
            this.checkGameState();
        }
    }

    render() {
        return (
            <Aux>
                <div className={classes.Content}>
                    <Score score={this.state.score} />
                    <Message
                        msg={this.state.msg}
                        winner={this.state.winner} />
                    <GameBoard
                        xTurn={this.state.xTurn}
                        mouseHover={this.mouseHoverHandler.bind(this)}
                        clicked={this.clickHandler.bind(this)}
                        gameReset={this.state.gameReset}
                        lineWon={this.state.lineWon} />
                    <Button
                        clicked={this.playAgain.bind(this)}
                        disabled={!this.state.gameOver} />
                </div>
            </Aux>
        );
    }
}

export default Game;
