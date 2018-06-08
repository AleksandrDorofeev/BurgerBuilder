import React from 'react';
import classes from './BurgerIngregient.css';

const BurgerIngregient = (props) => {
    let ingredient = null;

    switch(props.type) {
        case('bread-bottom'):
        ingredient = <div className={classes.Breadbottom}></div>
    }
}

export default BurgerIngregient;