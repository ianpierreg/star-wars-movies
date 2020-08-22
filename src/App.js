import React from 'react';
import logo from './logo.svg';
import './stylesheets/stars_panel.scss';
import CardsWrapper from "./components/cards_wrapper";

function App() {
  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
          STAR WARS
          Movies
      </div>
      <CardsWrapper />
  </div>);
}

export default App;
