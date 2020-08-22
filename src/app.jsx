import React from 'react'
import './assets/stylesheets/stars_panel.scss'
import CardsWrapper from "./components/cards_wrapper"
import { withStore } from 'react-context-hook'
import Header from './components/header'


function App() {
    return (
        <div>
          <div id='stars'/>
          <div id='stars2'/>
          <div id='stars3'/>
          <Header />
          <CardsWrapper />
        </div>
    )
}

const initialValue = {
  selected: {
    firstSelected: { id: -1, episodeId: -1 },
    secondSelected: { id: -1, episodeId: -1 }
  },
  bestTime: 0,
  maxPoints: 0,
  rightOnes: []
}

export default withStore(App, initialValue, { })
