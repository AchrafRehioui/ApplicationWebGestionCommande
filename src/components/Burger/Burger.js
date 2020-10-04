import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const IngredientsTransformes =Object.keys(props.ingredients)
        .map(ingredientCle => {
            return [...Array(props.ingredients[ingredientCle].map((_, i) => {
                <BurgerIngredient key={ingredientCle + i} type={ingredientCle} />
            });
        });
    return (
        <div className={classes.Burger}>
                <BurgerIngredient type="pain-dessous"/>
                <BurgerIngredient type="fromage"/>
                <BurgerIngredient type="viande"/>
                <BurgerIngredient type="pain-dessus"/>
        </div>
    );
};

export default burger;