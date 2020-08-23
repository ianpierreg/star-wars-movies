import React from 'react'
import '../assets/stylesheets/stars_panel.scss'
import CardsWrapper from './cards_wrapper'
import { withStore } from 'react-context-hook'
import GameInfo from './game_info'
import initialStore from '../helpers/initial_store'
import AudioPlayer from './audio_player'

const MemoryGame = () => (
  <div>
    <div id='stars'/>
    <div id='stars2'/>
    <div id='stars3'/>
    <GameInfo />
    <AudioPlayer />
    <CardsWrapper />
  </div>
)

export default withStore(MemoryGame, initialStore, { })
