import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import OrderContext from "../../../store/order-context";

const Header = () => {
  const orderCtx = useContext(OrderContext);

  const cartBtnHandler = () => {
    orderCtx.onCartOpen();
  };

  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>

      <Button onClick={cartBtnHandler} className={styles["header__cart"]}>
        <i className="fas fa-shopping-cart"></i>
        <span>Your cart</span>
        <span className={styles["header__quantity"]}>
          {orderCtx.totalOrders}
        </span>
      </Button>
    </header>
  );
};

export default Header;
