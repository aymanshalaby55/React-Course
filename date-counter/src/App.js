import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function addStep() {
    setStep((currentStep) => currentStep + 1);
  }
  function minusStep() {
    setStep((currentStep) => currentStep - 1);
  }

  function addCount() {
    setCount((currentStep) => currentStep + step);
  }
  function minsCount() {
    setCount((currentStep) => currentStep - step);
  }
  return (
    <div>
      <div className="step">
        <button onClick={minusStep}>-</button>
        <p>Step : {step}</p>
        <button onClick={addStep}> + </button>
      </div>
      <div className="count">
        <button onClick={minsCount}>-</button>
        <p>count : {count}</p>
        <button onClick={addCount}> + </button>
      </div>

      <p>{count} days</p>
    </div>
  );
}

export default App;
