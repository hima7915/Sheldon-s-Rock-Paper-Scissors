import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import robo from "./Assets/Robot.png";
import multi from "./Assets/Multiplayer.png";
import Game from "./gamecomp";
import { useState } from 'react';
import DSlider from './slider';

var user="";
var user1;
var oppo="Robot#043";
function App() {
  const [name, setName]=useState("");
  function handleChange(event){
    setName(event.target.value);
    user=name;
    console.log(user);
  };
  const [val, setVal]=useState("");
  function handleChange1(event){
    setVal(event.target.value);
    user1=val;
    console.log(user1);
  };
  function Submit(){
    return(ReactDOM.createRoot(document.getElementById("root")).render(<Game />));
  }

  return (
    <div className="App">
      <form onSubmit={Submit}>
    <h1>Enter Your Name&emsp;&nbsp; <input className='name' type="text" placeholder="Type..." onChange={handleChange} value={name}></input></h1>
    <h1>Number of Rounds&nbsp; </h1>
    {<DSlider />}
    {console.log(DSlider.newValue)};
    <div>
    <button classsName='Computer'><img src={robo}></img></button> 
    <button className='Multiplayer'><img src={multi}></img></button>
    </div> 
    </form>
    </div>
  );
}

export default App;
export {user,oppo};