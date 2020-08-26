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
import useFetch from '../fetch'
import loader from '../../assets/images/loader.gif'

const MemoryGame = () => {
  const [data, setData] = useState([])
  const { seconds, restart, toggleAudio, soundStatusIcon } = useGameController(data.length)
  const { response, error, isLoading } = useFetch('https://swapi.dev/api/films/', { })

  useEffect(() => {
    if (!isLoading && !error && response) setData(response.results)
  }, [response, error, isLoading])




  return (
    <div>
      <Stars />

      { isLoading ? (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      ) : (
       <>
         <GameInfo seconds={seconds} restart={restart} />
         <AudioToggler toggleAudio={toggleAudio} soundStatusIcon={soundStatusIcon} />
         <CardsWrapper cards={data} />
       </>
      )}
    </div>
  )
}

export default withStore(MemoryGame, initialStore, { })
