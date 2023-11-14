import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const removeValue = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  };
  const addValue = () => {
    if (counter != 20) {
      counter = counter + 1;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>Om Kumar</h1>
      <h2>Counter Value : {counter}</h2>
      <br />

      <button onClick={addValue}>Add Value{counter}</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
