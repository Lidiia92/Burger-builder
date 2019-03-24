import React from 'react';
import Aux from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey + Math.random()}><span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicios burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;