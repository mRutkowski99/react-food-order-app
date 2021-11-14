import React, { useContext } from "react";
import styles from "./CartElement.module.css";
import Button from "../../UI/Button/Button";
import OrderContext from "../../../store/order-context";

const CartElement = (props) => {
  const orderCtx = useContext(OrderContext);

  const addBtnHandler = () => {
    orderCtx.onAdd({
      name: props.name,
      val: +props.value + 1,
      price: props.price,
    });
  };

  const removeBtnHandler = () => {
    orderCtx.onAdd({
      name: props.name,
      val: +props.value - 1,
      price: props.price,
    });
  };

  return (
    <li className={styles["cart-element"]}>
      <div>
        <p className={styles.name}>{props.name}</p>
        <span className={styles.price}>{props.price}</span>
        <span className={styles.value}>x{props.value}</span>
      </div>
      <div className={styles.buttons}>
        <Button onClick={addBtnHandler}>+</Button>
        <Button onClick={removeBtnHandler}>-</Button>
      </div>
    </li>
  );
};

export default CartElement;
