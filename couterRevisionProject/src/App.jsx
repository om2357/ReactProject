import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    if(counter!=20)
    {
      counter = counter + 1;
    }
      setCounter(counter)
  }
  const removeValue = () => {
    if(counter!=0)
    {
      counter = counter - 1;
    }
    
    setCounter(counter)
  }

  return (
    <>
      <h1>Hello Ms Counter</h1>
      <h2>Value -- {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
