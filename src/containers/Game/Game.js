import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Score from '../../components/Score/Score';
import GameBoard from '../../components/GameBoard/GameBoard';
import classes from './Game.module.css';

class Game extends Component {
    state = {

    }

    render() {
        return (
            <Aux>
                <div className={classes.Content}>
                    <Score />
                    <GameBoard />
                </div>
            </Aux>
        );
    }
}

export default Game;
