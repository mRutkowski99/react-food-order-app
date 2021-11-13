import React, { useState, useEffect } from "react";

const OrderContext = React.createContext({
  onAdd: (data) => {},
  onRemove: () => {},
  orders: {},
});

export const OrderContextProvider = (props) => {
  //STATE HOOKS
  const [orders, setOrders] = useState({});
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  console.log(totalOrders, totalPrice);

  return (
    <OrderContext.Provider
      value={{
        onAdd: addHandler,
        onRemove: removeHandler,
        orders: orders,
        totalOrders: totalOrders,
        totalPrice: totalPrice,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
