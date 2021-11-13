import React from "react";
import styles from "./App.module.css";
import MealList from "./components/Meals/MealsList/MealsList";
import Header from "./components/UI/Header/Header";
import SectionHero from "./components/UI/Section-hero/SectionHero";

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
  return (
    <>
      <Header />
      <SectionHero />
      <MealList mealsArr={MEALS} />
    </>
  );
}

export default App;
