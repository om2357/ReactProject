import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let addValue =() =>{
    // count = count + 1;
    setCount(count + 1)
  }
  let removeValue = () =>
  {
    count = count - 1;
    setCount(count)
  }

  

  return (
    <>
      <h1>Om kumar</h1>
      <h2>Counter Value is {count}</h2>
      <br />

      <button onClick={addValue}> Add Value {count}</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
