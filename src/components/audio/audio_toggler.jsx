import React from 'react'
import '../../assets/stylesheets/audio_player.scss'
import PropTypes from 'prop-types'

const AudioToggler = ({ toggleAudio, soundStatusIcon }) =>  (
  <div className="audio-player" onClick={toggleAudio}>
    <img className="sound-icon" src={soundStatusIcon} alt="controle de som" />
  </div>
)

AudioToggler.propTypes = {
  toggleAudio: PropTypes.func.isRequired,
  soundStatusIcon: PropTypes.string.isRequired
}

export default AudioToggler