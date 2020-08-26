import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../assets/stylesheets/stars_panel.scss'
import { withStore } from 'react-context-hook'
import CardsWrapper from '../cards/cards_wrapper'
import GameInfo from './game_info'
import initialStore from '../../helpers/initial_store'
import AudioToggler from '../audio/audio_toggler'
import useGameController from './game_controller'
import Stars from '../common/stars'

const MemoryGame = () => {
  const [data, setData] = useState([])
  const { seconds, restart, toggleAudio, soundStatusIcon } = useGameController(data.length)

  async function fetchData() {
    const response = await axios('https://swapi.dev/api/films/')
    setData(response.data.results)
  }

  // treat promiso and treat errors
  useEffect(() => { fetchData() }, [])

  return (
    <div>
      <Stars />
      <GameInfo seconds={seconds} restart={restart} />
      <AudioToggler toggleAudio={toggleAudio} soundStatusIcon={soundStatusIcon} />
      <CardsWrapper cards={data} />
    </div>
  )
}

export default withStore(MemoryGame, initialStore, { })
