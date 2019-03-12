import React from 'react';
import classes from './Burger.css';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';

const burger = (props) => {
    const transformedIngridients = Object.keys(props.ingredients).map(ingredientKey => {
        return ([...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngridients key={ingredientKey + Math.random()} type={ingredientKey} />
        }));
    });

    console.log(transformedIngridients);
    return (
        <div className={classes.Burger}>
            <BurgerIngridients type="bread-top"/>
            {transformedIngridients}
            <BurgerIngridients type="bread-bottom"/>
        </div>
    );
};

export default burger;