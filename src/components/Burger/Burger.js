import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props)
  let transformIngredients = Object.keys(props.ingredients) //["salad", "meat", "beacon"]
    .map(igKey => { //igKey = "salad"
      return [...Array(props.ingredients[igKey])].map((_, i) => { //0
        return <BurgerIngredient key={igKey + i} type ={igKey} />
      });
    })
    .reduce((arr, el) => {   //прогоняем каждый элемент
      console.log(arr);
      console.log(el);
      return arr.concat(el)  //берём пустой массив и добовляем получанные элементы
    }, []);

  if(transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>
  }
console.log(transformIngredients);
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);