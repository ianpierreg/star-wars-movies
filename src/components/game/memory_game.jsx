import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../assets/stylesheets/stars_panel.scss'
import CardsWrapper from '../cards/cards_wrapper'
import { withStore } from 'react-context-hook'
import GameInfo from './game_info'
import initialStore from '../../helpers/initial_store'
import AudioToggler from '../audio/audio_toggler'
import useGameController from './game_controller'


const MemoryGame = () => {
  const [data, setData] = useState([])
  const { seconds, restart, toggleAudio, soundStatusIcon } = useGameController(data.length)

  async function fetchData() {
    const response = await axios('https://swapi.dev/api/films/')
    setData(response.data.results)
  }

  useEffect(() => { fetchData() }, [])

  return (
    <div>
      <div id='stars'/>
      <div id='stars2'/>
      <div id='stars3'/>
      <GameInfo seconds={seconds} restart={restart} />
      <AudioToggler toggleAudio={toggleAudio} soundStatusIcon={soundStatusIcon} />
      <CardsWrapper cards={data} />
    </div>
  )
}

export default withStore(MemoryGame, initialStore, { })
