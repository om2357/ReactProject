import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  let FoodItem = ["Daal", "Roti", "Sabji", "Ghee", "Milk", "etc"];
  // let FoodItem = []
  let emptyFood = FoodItem.length === 0 ? <h3> I am Still Hungry.</h3> : null;
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      {emptyFood}
      <ul className="list-group">
        {FoodItem.map((item) => (
          <li key={(Math.random()*10)}
          className="list-group-item">{item}</li>
          
        ))}
      </ul>
    </React.Fragment>
  );
}
{
  /* 
      <li className="list-group-item">Rotti</li>
      <li className='list-group-item'>Sabji</li> */
}
export default App;
