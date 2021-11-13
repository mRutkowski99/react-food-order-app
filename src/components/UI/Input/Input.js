import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const [inputVal, setInputVal] = useState("0");

  const inputChangeHandler = (event) => {
    setInputVal(event.target.value);
  };

  props.getValue(inputVal);

  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input
        onChange={inputChangeHandler}
        type="text"
        min="0"
        placeholder="0"
      />
    </div>
  );
};

export default Input;
