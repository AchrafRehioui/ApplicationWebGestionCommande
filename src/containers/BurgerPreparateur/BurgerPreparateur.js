import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

 class BurgerPreparateur extends Component {
    
    state = {

        ingredients: {
            salade: 1,
            bacon: 1,
            fromage: 2,
            viande: 2
        }

    }
    render () {
         return (
             <Auxi>
                 <Burger ingredients={this.state.ingredients}/>
                 <div>Construire des controles</div>
             </Auxi>
         );
     }
 }

 export default BurgerPreparateur;