import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/audio_player.scss'

const AudioPlayer = () => {
  const [audio] = useState(new Audio("/starWars.mp3"))

  useEffect(() => {
    audio.play()
    audio.volume = 0.07
    audio.loop = true
  }, [])

  const toggleAudio = () => audio.paused ? audio.play() : audio.pause()

  return (
    <div className="audio-player" onClick={toggleAudio}>
      X
    </div>
  )
}

export default AudioPlayer