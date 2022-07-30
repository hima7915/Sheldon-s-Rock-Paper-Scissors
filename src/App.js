import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import robo from "./Assets/Robot.png";
import multi from "./Assets/Multiplayer.png";
import Game from "./gamecomp";
import { useState } from 'react';
import DSlider from './slider';

const supervillains = require('supervillains');
var oppo=supervillains.random();
var user='';
function App() {
  const [name, setName]=useState('');
  user=name;
  function Submit(){
    return(ReactDOM.createRoot(document.getElementById("root")).render(<Game />));
  }

  return (
    <div className="App">
      <form onSubmit={Submit}>
    <h1>Enter Your Name&emsp;&nbsp; <input className='name' name="name" value={name} type="text" placeholder="Type..." onChange={e => setName(e.target.value)}></input></h1>
    <h1>Number of Rounds&nbsp; </h1>
    {<DSlider />}
    <div>
    <button className='Computer'><img src={robo} alt="Robot"></img></button> 
    <button className='Multiplayer'><img src={multi} alt="Multiplayer"></img></button>
    </div> 
    </form>
    </div>
  );
  
}

export default App;
export {user,oppo};