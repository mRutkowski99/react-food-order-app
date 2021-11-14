import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartList from "../CartList/CartList";
import Button from "../../UI/Button/Button";
import OrderContext from "../../../store/order-context";

const Cart = () => {
  const orderCtx = useContext(OrderContext);

  const { orders } = orderCtx;
  const ordersArr = [];
  for (const order in orders) {
    ordersArr.push({
      name: order,
      price: orders[order].price,
      value: orders[order].val,
    });
  }

  const filteredOrdersArr = ordersArr.filter((order) => +order.value !== 0);

  console.log(ordersArr, filteredOrdersArr);

  const orderBtnHandler = () => {
    if (filteredOrdersArr.length === 0) return;
    console.log("Ordering...");
  };

  const closeBtnHandler = () => {
    orderCtx.onCartClose();
  };

  return (
    <div className={styles.cart}>
      <div className={styles["cart-inner"]}>
        <CartList ordersArr={filteredOrdersArr} />
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${orderCtx.totalPrice.toFixed(2)}</span>
        </div>
        <div className={styles.buttons}>
          <Button onClick={closeBtnHandler}>Close</Button>
          <Button onClick={orderBtnHandler}>Order</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
