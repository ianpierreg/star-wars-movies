import React from 'react'
import './assets/stylesheets/stars_panel.scss'
import CardsWrapper from './components/cards_wrapper'
import { withStore } from 'react-context-hook'
import GameInfo from './components/game_info'
import initialStore from './helpers/initial_store'


const App = () => (
  <div>
    <div id='stars'/>
    <div id='stars2'/>
    <div id='stars3'/>
    <GameInfo />
    <CardsWrapper />
  </div>
)

export default withStore(App, initialStore, { })
