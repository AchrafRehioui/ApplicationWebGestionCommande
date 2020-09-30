import React, { Component } from 'react';
import classes from './ingredientsBurger.css';
import PropTypes from 'prop-types';

class IngredientsBurger extends Component {
 
    render () {
        let ingredient =null;
        switch (this.props.type) {
            case ('pain-dessous'):
                ingredient: <div className={classes.PainDessous}></div>;
                break;
            case ('pain-dessus'):
                ingredient: (
                    <div className={classes.PainDessus}>
                        <div className={classes.Graines1}></div>
                        <div className={classes.Graines2}></div>
                    </div>
                );
                break;
            case ('viande'):
                ingredient = <div className={classes.Viande}></div>    
                break;
            case ('fromage'):
                ingredient = <div className={classes.Fromage}></div>    
                break;  
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>    
                break;
            case ('salade'):
                ingredient = <div className={classes.Salade}></div>    
                break;
            default:   
                ingredient = null;
        }
    
        return ingredient;
    }
}
  
IngredientsBurger.PropTypes = {
    type: PropTypes.string.isRequired
};

export default IngredientsBurger;