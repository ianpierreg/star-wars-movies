import React from 'react'
import './stylesheets/stars_panel.scss'
import CardsWrapper from "./components/cards_wrapper"
import { withStore } from 'react-context-hook'


const App = () => (
  <div>
    <div id='stars'/>
    <div id='stars2'/>
    <div id='stars3'/>
    <div id='title'>
        STAR WARS
        Movies
    </div>
    <CardsWrapper />
  </div>
)



export default withStore(App, { lastSelected: -1 }, { })
