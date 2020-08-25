import React, { useEffect, useState } from 'react'
import '../../assets/stylesheets/header.scss'
import blueSaber from '../../assets/images/blueSaber.png'
import greenSaber from '../../assets/images/greenSaber.png'
import { useStore } from 'react-context-hook'

const GameInfo = ({ seconds, restart }) => {
  const [rightOnes] = useStore('rightOnes')
  const [bestTime] = useStore('bestTime')
  const [gameSize] = useStore('gameSize')
  const [started] = useStore('started')

  const buttonText = () => {
    if(!started) return 'Iniciar'
    if (rightOnes.length === gameSize) return 'Embaralhar'
    return 'Desistir'
  }

  const buttonClass = () => {
    const newClass = 'main-button'
    if(!started) return `${newClass} yellow`
    if (rightOnes.length === gameSize) return `${newClass} blue`
    return `${newClass} red`
  }

  return (
    <div className="header">
      <div className="saber left-saber">
        <img src={blueSaber} alt="sabre azul"/>
        <span className="top-info">Seu tempo: {seconds} segundos</span>
      </div>
      <button onClick={restart} className={buttonClass()}>{buttonText()}</button>
      <div className="saber right-saber">
        <img src={greenSaber} alt="sabre verde"/>
        <span className="top-info">Melhor tempo: {bestTime} segundos</span>
      </div>
    </div>
  )
}

export default GameInfo
