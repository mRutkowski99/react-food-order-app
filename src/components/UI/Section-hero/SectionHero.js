import React from "react";
import styles from "./SectionHero.module.css";

const SectionHero = () => {
  return (
    <section className={styles["section-hero"]}>
      <div className={styles["section-hero__bg"]}></div>

      <div className={styles["section-hero__description"]}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs
        </p>
      </div>
    </section>
  );
};

export default SectionHero;
