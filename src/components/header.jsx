import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/header.scss'
import blueSaber from '../assets/images/blueSaber.png'
import greenSaber from '../assets/images/greenSaber.png'
import { useStore } from "react-context-hook";

const Header = () => {
  const [rightOnes, setRightOnes] = useStore('rightOnes')
  const [bestTime, setBestTime] = useStore('bestTime')
  const [maxPoints, setMaxPoints] = useStore('maxPoints')
  const [selected, setSelected] = useStore('selected')
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  }, [])


  const restart = () => {
    setRightOnes([])
    setSelected({
      firstSelected: { id: -1, episodeId: -1 },
      secondSelected: { id: -1, episodeId: -1 }
    })
    setSeconds(0)
  }
  useEffect(() => {
    if(rightOnes.length === maxPoints) {
      if (seconds < bestTime || bestTime === 0) setBestTime(seconds)
      restart()
    }
  }, [rightOnes])


  return (
    <div className="header">
      <div className="saber left-saber">
        <img src={blueSaber} alt="blue-saber"/>
        <span className="top-info">Seu tempo: {seconds} segundos</span>
      </div>
      <div className='title'>
        sua memória, teste
        <button onClick={restart}>Reiniciar</button>
      </div>
      <div className="saber right-saber">
        <img src={greenSaber} alt="green-saber"/>
        <span className="top-info">Melhor tempo: {bestTime} segundos</span>
      </div>
    </div>

  )
}

export default Header
