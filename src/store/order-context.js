import React, { useState, useEffect } from "react";

const OrderContext = React.createContext({
  onAdd: (data) => {},
  onRemove: () => {},
  onCartOpen: () => {},
  onCartClose: () => {},
  orders: {},
  totalOrders: 0,
  totalPrice: 0,
  isCartShown: false,
});

export const OrderContextProvider = (props) => {
  //STATE HOOKS
  const [orders, setOrders] = useState({});
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartShown, setCartShown] = useState(false);

  //HANDLERS
  const addHandler = (data) => {
    setOrders((prevState) => {
      return {
        ...prevState,
        [data.name]: { price: data.price, val: data.val },
      };
    });
  };

  const removeHandler = () => {
    console.log(true);
  };

  const openCartHandler = () => {
    setCartShown(true);
  };

  const closeCartHandler = () => {
    setCartShown(false);
  };

  //EFFECT HOOKS
  useEffect(() => {
    let calcTotal = 0;
    let caclPrice = 0;

    for (const order in orders) {
      calcTotal += +orders[order].val;
      caclPrice += +orders[order].price.slice(1) * +orders[order].val;
    }

    setTotalOrders(calcTotal);
    setTotalPrice(caclPrice);
  }, [orders]);

  return (
    <OrderContext.Provider
      value={{
        onAdd: addHandler,
        onRemove: removeHandler,
        onCartOpen: openCartHandler,
        onCartClose: closeCartHandler,
        orders: orders,
        totalOrders: totalOrders,
        totalPrice: totalPrice,
        isCartShown: cartShown,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
