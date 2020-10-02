import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

 class BurgerPreparateur extends Component {
     render () {
         return (
             <Auxi>
                 <Burger />
                 <div>Construire des controles</div>
             </Auxi>
         );
     }
 }

 export default BurgerPreparateur;