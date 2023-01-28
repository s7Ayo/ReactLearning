//import logo from './logo.svg';
import './App.css';
import React from 'react';

function Adult() {
  return <h1>You are an adult</h1>;
}
function NotAdult() {
  return <h1>You are not an adult - you are less than 18 years old!</h1>;
}
function Person(props) {
  if (props.adulCheck === true){
    return Adult()
  }else if (props.adulCheck === false){
    return NotAdult()
  }
}

function App(){
  const isAdult=true;
  return (
    <Person adulCheck={isAdult} />
  );

}
export default App;
