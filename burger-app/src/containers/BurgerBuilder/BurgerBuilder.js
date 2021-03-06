import React, {Component} from 'react';
import Aux from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false, 
        purchasing: false
    }

    updatePurchaseState (updatedState) {
        const ingredients = {
            ...updatedState
        };
        const sum = Object.keys(ingredients)
        
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {return sum + el}, 0);

        this.setState({purchasable: sum > 0});
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingredients,

        };
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngridients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngridients);

    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingredients,

        };
        updatedIngridients[type] = updatedCount;
        const priceDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngridients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngridients);

    }

    purchaseHandler = () => {
        console.log(this);
        this.setState({purchasing: true});
    }

    closeBackdrop = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You continue');
    }


    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} closeBackdrop={this.closeBackdrop}>
                    <OrderSummary ingredients={this.state.ingredients} cancelPurchase={this.closeBackdrop} continuePurchase={this.purchaseContinueHandler} price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngridientHandler} 
                ingredientRemoved={this.removeIngridientHandler} 
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;