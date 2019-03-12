import React from 'react';
import classes from './Burger.css';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngridients type="bread-top"/>
            <BurgerIngridients type="cheese"/>
            <BurgerIngridients type="meat"/>
            <BurgerIngridients type="bread-bottom"/>
        </div>
    );
};

export default burger;