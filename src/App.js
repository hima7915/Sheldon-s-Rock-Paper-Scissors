import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import robo from "./Assets/Robot.png";
import multi from "./Assets/Multiplayer.png";
import Scorebar from "./scorebar";
import { useState } from 'react';
import DSlider from './slider';

const supervillains = require('supervillains');
var user="";
var oppo=supervillains.random();;
function App() {
  const [name, setName]=useState("");
  user=name;
  function handleChange(event){
    setName(event.target.value);
  };
  function Submit(){
    return(ReactDOM.createRoot(document.getElementById("root")).render(<Scorebar />));
  }

  return (
    <div className="App">
      <form onSubmit={Submit}>
    <h1>Enter Your Name&emsp;&nbsp; <input className='name' type="text" placeholder="Type..." onChange={handleChange} value={name}></input></h1>
    <h1>Number of Rounds&nbsp; </h1>
    {<DSlider />}
    <div className='userselection'>
    <button className='Computer'><img src={robo} alt="Robot"></img></button> 
    <button className='Multiplayer'><img src={multi} alt="Multiplayer"></img></button>
    </div> 
    </form>
    </div>
  );
}

export default App;
export {user,oppo};