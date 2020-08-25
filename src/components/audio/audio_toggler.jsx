import React, { useEffect, useState } from 'react'
import '../../assets/stylesheets/audio_player.scss'
import soundOff from '../../assets/images/soundOff.png'
import soundOn from '../../assets/images/soundOn.png'

const AudioToggler = ({ toggleAudio, soundStatusIcon }) => {


  return (
    <div className="audio-player" onClick={toggleAudio}>
      <img className="sound-icon" src={soundStatusIcon} alt="controle de som" />
    </div>
  )
}

export default AudioToggler