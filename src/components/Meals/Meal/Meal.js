import React, { useContext, useState } from "react";
import styles from "./Meal.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import OrderContext from "../../../store/order-context";

const Meal = (props) => {
  const orderCxt = useContext(OrderContext);

  let enteredVal = 0;
  const inputValHandler = (val) => {
    enteredVal = val;
  };

  const addBtnHandler = () => {
    orderCxt.onAdd({
      name: props.mealName,
      val: enteredVal,
      price: props.mealPrice,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <p className={styles.meal__name}>{props.mealName}</p>
        <p className={styles.meal__description}>{props.mealDescripition}</p>
        <p className={styles.meal__price}>{props.mealPrice}</p>
      </div>

      <div>
        <Input getValue={inputValHandler} label="Amount" />
        <Button onClick={addBtnHandler}>+Add</Button>
      </div>
    </li>
  );
};

export default Meal;
