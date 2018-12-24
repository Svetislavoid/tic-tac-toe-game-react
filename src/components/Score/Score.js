import React from 'react';
import classes from './Score.module.css';
import Aux from '../../hoc/Aux/Aux';
import XOimage from '../../assets/xo-icons.png';

const score = (props) => (
    <Aux>
        <img src={XOimage} alt='XOimage' />
        <div className={classes.Score}><strong>{props.score['x']}</strong> : <strong>{props.score['o']}</strong></div>
    </Aux>
);

export default score;
