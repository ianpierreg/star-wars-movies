import React from 'react'
import '../../assets/stylesheets/game_info.scss'
import PropTypes from 'prop-types'
import { useStore } from 'react-context-hook'
import blueSaber from '../../assets/images/blueSaber.png'
import greenSaber from '../../assets/images/greenSaber.png'
import CommandButton from './command_button'

const GameInfo = ({ seconds, restart }) => {
  const [bestTime] = useStore('bestTime')

  return (
    <div className="header">
      <div className="saber left-saber">
        <img src={blueSaber} alt="sabre azul" />
        <span className="top-info left">
          Seu tempo:
          {seconds}
        </span>
      </div>
      <CommandButton restart={restart} />
      <div className="saber right-saber">
        <img src={greenSaber} alt="sabre verde" />
        <span className="top-info right">
          Melhor tempo:
          {bestTime}
        </span>
      </div>
    </div>
  )
}

GameInfo.propTypes = {
  seconds: PropTypes.number.isRequired,
  restart: PropTypes.func.isRequired
}

export default GameInfo
