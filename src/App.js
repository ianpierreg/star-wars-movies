import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CardsWrapper from "./components/cards_wrapper";

function App() {
  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
        <span>
          STAR WARS
        </span>
        <br/>
        <span>
          MOVIES
        </span>
      </div>
      <CardsWrapper />
  </div>);
}

export default App;
