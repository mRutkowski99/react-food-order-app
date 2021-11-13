import React from "react";
import styles from "./Meal.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const Meal = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <p className={styles.meal__name}>{props.mealName}</p>
        <p className={styles.meal__description}>{props.mealDescripition}</p>
        <p className={styles.meal__price}>{props.mealPrice}</p>
      </div>

      <div>
        <Input label="Amount" />
        <Button>+Add</Button>
      </div>
    </li>
  );
};

export default Meal;
