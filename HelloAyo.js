//import logo from './logo.svg';
import './App.css';
import React from 'react';

function showMessage(name) {
  alert(`Hello ${name}!`);
}

const showMessage2 = (name) => {
  alert(`Hi ${name}!`);
};

function App(){

  const name = "Ayo";


  return(
    <div>
      <h2>&nbsp;Please click the buttons below</h2>
      &nbsp; <button onClick={() => showMessage(name)}>Say Hello !</button>
      &nbsp; <button onClick={() => showMessage2(name)}>Say hi !</button>
    </div>
  );
}

export default App;
