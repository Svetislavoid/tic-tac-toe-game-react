import React from 'react';
import Aux from '../Aux/Aux';
// import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <h1>TIC-TAC-TOE GAME</h1>
        <main>{props.children}</main>;
    </Aux>
);

export default layout;
