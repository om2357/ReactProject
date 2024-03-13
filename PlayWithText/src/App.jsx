import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>
  {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#152b3f'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'light'
    }
  }

  return (
    <>
  
      <Navbar Heading = "TextPlay" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm heading = "Enter the text to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
