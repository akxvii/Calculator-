import styles from "./CalculatorDisplay.module.css";
import { useState } from "react";

const CalculatorDisplay = ({ displayValue }) => {
  return (
    <input
      classNameName={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default CalculatorDisplay;
