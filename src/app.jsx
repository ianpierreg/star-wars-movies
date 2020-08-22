import React from 'react'
import './stylesheets/stars_panel.scss'
import CardsWrapper from "./components/cards_wrapper"
import { withStore } from 'react-context-hook'


function App() {
    return (
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
}

const initialValue = {
  selected: {
    firstSelected: { id: -1, episodeId: -1 },
    secondSelected: { id: -1, episodeId: -1 }
  },
  rightOnes: []
}

export default withStore(App, initialValue, { })
