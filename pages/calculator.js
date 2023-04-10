import { useState, useEffect } from "react";
import styles from '@/styles/Calculator.module.css'
import Meta from "@/components/Meta";

function App() {
  const [opClicked, setOpClicked] = useState(false);
  const [operator, setOperator] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [calc, setCalc] = useState("");

  const numClicked = (str) => {
    opClicked === false ? setNum1(num1 + str) : setNum2(num2 + str);
    num1.length !== 10 && setCalc(calc + str);
  };

  const operatorClicked = (op) => {
    opClicked && num2 !== "" && opClicked && equalClicked();
    operator === "" && setCalc(calc + op);
    setOpClicked(true);
    setOperator(op);
  };

  const reset = () => {
    setCalc("");
    setNum1("");
    setNum2("");
    setOperator("");
    setOpClicked(false);
  };

  const equalClicked = () => {
    switch (operator) {
      case "+":
        setCalc(String(Number(num1) + Number(num2)));
        setNum1(String(Number(num1) + Number(num2)));
        setNum2("");
        setOperator("");
        setOpClicked(false);
        break;
      case "-":
        setCalc(String(Number(num1) - Number(num2)));
        setNum1(String(Number(num1) - Number(num2)));
        setNum2("");
        setOperator("");
        setOpClicked(false);
        break;
      case "×":
        setCalc(String(Number(num1) * Number(num2)));
        setNum1(String(Number(num1) * Number(num2)));
        setNum2("");
        setOperator("");
        setOpClicked(false);
        break;
      case "÷":
        setCalc(String(Number(num1) / Number(num2)));
        setNum1(String(Number(num1) / Number(num2)));
        setNum2("");
        setOperator("");
        setOpClicked(false);
        break;
      default:
        break;
    }
  };

  const negative = () => {
    opClicked === false
      ? num1 !== "" && num1 !== "-"
        ? setNum1(String(0 - Number(num1)))
        : num1 === "-"
        ? setNum1("")
        : setNum1("-")
      : num2 !== "" && num2 !== "-"
      ? setNum2(String(0 - Number(num2)))
      : num2 === "-"
      ? setNum2("")
      : setNum2("-");
  };

  const deleteNum = () => {
    if (calc[calc.length - 1] === operator) {
      setOpClicked(false);
      setOperator("");
    } else {
      if (opClicked) {
        setNum2(num2.slice(0, num2.length - 1));
      } else {
        setNum1(num1.slice(0, num1.length - 1));
      }
    }
  };

  useEffect(() => {
    setCalc(num1 + operator + num2);
  }, [num1, num2, operator]);

  return (
    <div className={styles.App}>
      <Meta title="Calculator"/> 
      <div className={styles.calculator}>
        <div className={styles.result}>
          <span className={styles.calculation}>{calc}</span>
        </div>
        <button className={styles.wideButton} onClick={() => reset()}>
          AC
        </button>
        <button className={styles.button} onClick={() => deleteNum()}>Del</button>
        <button className={styles.button} onClick={() => operatorClicked("÷")}>÷</button>
        <button className={styles.button} onClick={() => numClicked(7)}>7</button>
        <button className={styles.button} onClick={() => numClicked(8)}>8</button>
        <button className={styles.button} onClick={() => numClicked(9)}>9</button>
        <button className={styles.button} onClick={() => operatorClicked("+")}>+</button>
        <button className={styles.button} onClick={() => numClicked(4)}>4</button>
        <button className={styles.button} onClick={() => numClicked(5)}>5</button>
        <button className={styles.button} onClick={() => numClicked(6)}>6</button>
        <button className={styles.button} onClick={() => operatorClicked("-")}>-</button>
        <button className={styles.button} onClick={() => numClicked(1)}>1</button>
        <button className={styles.button} onClick={() => numClicked(2)}>2</button>
        <button className={styles.button} onClick={() => numClicked(3)}>3</button>
        <button className={styles.button} onClick={() => operatorClicked("×")}>×</button>
        <button className={styles.button} onClick={() => negative()}>+/-</button>
        <button className={styles.button} onClick={() => numClicked(0)}>0</button>
        <button className={styles.button} onClick={() => numClicked(".")}>.</button>
        <button className={[`${styles.button} ${styles.equal}`]} onClick={() => equalClicked()}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
