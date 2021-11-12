import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>

      <div className={styles["header__cart"]}>
        <i className="fas fa-shopping-cart"></i>
        <span>Your cart</span>
        <span className={styles["header__quantity"]}>0</span>
      </div>
    </header>
  );
};

export default Header;
