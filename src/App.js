import React, { useContext } from "react";
import MealList from "./components/Meals/MealsList/MealsList";
import Header from "./components/UI/Header/Header";
import SectionHero from "./components/UI/Section-hero/SectionHero";
import Cart from "./components/Cart/Cart/Cart";
import OrderContext from "./store/order-context";

const MEALS = [
  { name: "Sushi", description: "Finest fish and veggies", price: "$22.99" },
  { name: "Schnitzel", description: "A german speciality", price: "$16.50" },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "$12.99",
  },
  { name: "Green Bowl", description: "Healty and green", price: "$18.99" },
];

function App() {
  const orderCtx = useContext(OrderContext);

  const { isCartShown } = orderCtx;

  return (
    <>
      <Header />
      <SectionHero />
      <MealList mealsArr={MEALS} />
      {isCartShown && <Cart />}
    </>
  );
}

export default App;
