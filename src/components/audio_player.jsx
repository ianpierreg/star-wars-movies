import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/audio_player.scss'

const AudioPlayer = () => {
  const [audio] = useState(new Audio("/starWars.mp3"))

  useEffect(() => {
    audio.play()
    audio.volume = 0.05
    audio.loop = true
  }, [])

  const start = () => audio.paused ? audio.play() : audio.pause()

  return (
    <div className="audio-player" onClick={start}>
      XX
    </div>
  )
}

export default AudioPlayer