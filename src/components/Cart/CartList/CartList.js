import React from "react";
import styles from "./CartList.module.css";
import CartElement from "../CartElement/CartElement";

const CartList = (props) => {
  return (
    <ul className={styles["cart-list"]}>
      {props.ordersArr.map((order, idx) => (
        <CartElement
          key={idx}
          name={order.name}
          price={order.price}
          value={order.value}
        />
      ))}
    </ul>
  );
};

export default CartList;
