import styles from "./App.module.css";
import CalculatorDisplay from "./components/CalculatorDisplay";
import Calculatorbutton from "./components/Calculatorbutton";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div classNameName={styles.calculator}>
      <CalculatorDisplay displayValue={calVal}></CalculatorDisplay>
      <Calculatorbutton onButtonClick={onButtonClick}></Calculatorbutton>
    </div>
  );
}

export default App;
