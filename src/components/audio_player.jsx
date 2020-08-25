import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/audio_player.scss'
import soundOff from '../assets/images/soundOff.png'
import soundOn from '../assets/images/soundOn.png'

const AudioPlayer = () => {
  const [audio] = useState(new Audio('/sounds/starWars.mp3'))
  const [soundIcon, setSoundIcon] = useState(soundOn)

  useEffect(() => {
    // audio.play()
    audio.volume = 0.0004
    audio.loop = true
  }, [])

  audio.onpause = () => setSoundIcon(soundOff)

  audio.onplay = () => setSoundIcon(soundOn)

  const toggleAudio = () => audio.paused ? audio.play() : audio.pause()

  return (
    <div className="audio-player" onClick={toggleAudio}>
      <img className="sound-icon" src={soundIcon} alt="controle de som" />
    </div>
  )
}

export default AudioPlayer