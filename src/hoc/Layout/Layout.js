import React from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <h1 className={classes.Title}><strong>TIC-TAC-TOE GAME</strong></h1>
        <main>{props.children}</main>
    </Aux>
);

export default layout;
