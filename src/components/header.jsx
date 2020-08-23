import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/header.scss'
import blueSaber from '../assets/images/blueSaber.png'
import greenSaber from '../assets/images/greenSaber.png'
import { useStore } from "react-context-hook";

const Header = () => {
  const [rightOnes, setRightOnes] = useStore('rightOnes')
  const [bestTime, setBestTime] = useStore('bestTime')
  const [maxPoints] = useStore('maxPoints')
  const [selected, setSelected] = useStore('selected')
  const [seconds, setSeconds] = useState(0)
  const [started, setStarted] = useStore('started')

  useEffect(() => {
    let interval = null
    if (started) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    } else if (!started && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [started])


  const restart = () => {
    setStarted(!started)
    setRightOnes([])
    setSelected({
      firstSelected: { id: -1, episodeId: -1 },
      secondSelected: { id: -1, episodeId: -1 }
    })
    // setSeconds(0)
  }

  useEffect(() => {
    if(rightOnes.length === maxPoints) {
      if (seconds < bestTime || bestTime === 0) setBestTime(seconds)
      // setSeconds(0)
      // setStarted(false)
      // setRightOnes([])
      // setSelected({
      //   firstSelected: { id: -1, episodeId: -1 },
      //   secondSelected: { id: -1, episodeId: -1 }
      // })
    }
  }, [rightOnes])


  const buttonText = () => {
    if(started) {
      if (rightOnes.length === maxPoints) return 'Embaralhar'
      return 'Desistir'
    }

    return 'Iniciar'
  }

  const buttonClass = () => {
    const newClass = 'main-button'
    if(started) {
      if (rightOnes.length === maxPoints) return `${newClass} blue`
      return `${newClass} red`
    }

    return `${newClass} yellow`
  }

  return (
    <div className="header">
      <div className="saber left-saber">
        <img src={blueSaber} alt="sabre azul"/>
        <span className="top-info">Seu tempo: {rightOnes.length === maxPoints ? 0 :   seconds} segundos</span>
      </div>
      <button onClick={restart} className={buttonClass()}>{buttonText()}</button>
      <div className="saber right-saber">
        <img src={greenSaber} alt="sabre verde"/>
        <span className="top-info">Melhor tempo: {bestTime} segundos</span>
      </div>
    </div>

  )
}

export default Header
