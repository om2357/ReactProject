import React from 'react';
import './App.css';
import Tooltip from './Tooltip';


class App extends React.Component{

//.........................................................................we have to create the state............................................. 
  constructor(){
    super();
    this.state={
      position:"top",
      hovering:false,
    };
  }

  //..........................................................handleClick function which handle the position............................................................
  handleClick=(pos)=>{
    this.setState({
      position:pos,
    })
  };


  //..........................................................handleMouseEnter function which handle the hovering condintion............................................................


  handleMouseOver=()=>{
    this.setState({
      hovering:true,
    });
  };



    //..........................................................handleMouseEnter function which handle the hovering condintion............................................................


  handleMouseOut=()=>{
    this.setState({
      hovering:false
    })
  }


  //..........................................................render part of the class based component............................................................

  render(){
    return (
      <div className="App">
         <div className='grp-name'>
            Select the position of the hovering!!
          </div>
        <div className='btn-position'>
          <button
          className= {this.state.position=== 'top' ? "btn active" :"btn" }
          onClick={(e)=>{
            this.handleClick('top');
          }}>
            top
          </button>
          <button
          className={this.state.position=== 'left' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('left');
          }}>
            left
          </button>
          <button
          className={this.state.position=== 'right' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('right');
          }}>
            right
          </button>
          <button
          className={this.state.position=== 'bottom' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('bottom');
          }}>
            down
          </button>
        </div>
{        //..........................................................hover button ............................................................

}        <div id="button-container">
          <button
          className='btn hover-btn'
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          >

          👋Hover Over Me
          </button>
          {this.state.hovering && <Tooltip position={this.state.position}/>}
        </div>
      </div>
    );
  }
}

export default App;