import React from "react";
import styles from "./MealList.module.css";
import Meal from "../Meal/Meal";

const MealList = (props) => {
  return (
    <ul className={styles["meals-list"]}>
      {props.mealsArr.map((meal, idx) => (
        <Meal
          key={idx}
          mealName={meal.name}
          mealDescripition={meal.description}
          mealPrice={meal.price}
        />
      ))}
    </ul>
  );
};

export default MealList;
