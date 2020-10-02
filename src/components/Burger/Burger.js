import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
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