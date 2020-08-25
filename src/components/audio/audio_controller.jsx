import { useEffect, useState } from 'react';
import '../../assets/stylesheets/cards.scss'
import { useStore } from 'react-context-hook'
import initialStore from '../../helpers/initial_store'
import soundOn from "../../assets/images/soundOn.png";
import soundOff from "../../assets/images/soundOff.png";

const useAudioController = ({ started, rightOnes, gameSize, selected }) => {
  const [mounted, setMounted] = useState(false)
  const [soundStatusIcon, setSoundStatusIcon] = useState(soundOn)
  const [shouldPauseSounds, setShouldPauseSounds] = useState(false)
  const [endGameSound] = useState(new Audio('/sounds/gameEnd.mp3'))
  const [startGameSound] = useState(new Audio('/sounds/gameStart.mp3'))
  const [winGameSound] = useState(new Audio('/sounds/gameWin.mp3'))
  const [themeMusic] = useState(new Audio('/sounds/starWars.mp3'))
  const [selectedCardSound] = useState(new Audio('/sounds/cardSelection.mp3'))

  useEffect(() => {
    // if(mounted && !shouldPauseSounds) selectedCardSound.play()
  }, [selected])

  const toggleAudio = () => {
    if (themeMusic.paused) {
      themeMusic.play()
      setSoundStatusIcon(soundOn)
      setShouldPauseSounds(false)
    } else {
      themeMusic.pause()
      startGameSound.pause()
      endGameSound.pause()
      winGameSound.pause()
      selectedCardSound.pause()
      setSoundStatusIcon(soundOff)
      setShouldPauseSounds(true)
    }
  }

  useEffect(() => {
    setMounted(true)
    // themeMusic.play()
    themeMusic.loop = true
    themeMusic.volume = 0.0004
    startGameSound.volume = 0.001
    selectedCardSound.volume = 0.001
    endGameSound.volume = 0.002
    winGameSound.volume = 0.004
  }, [])

  useEffect(() => {
    if(mounted && !shouldPauseSounds) {
      // started ? startGameSound.play() : endGameSound.play()
    }
  }, [started])


  useEffect(() => {
    // if(rightOnes.length === gameSize && mounted && !shouldPauseSounds) winGameSound.play()
  }, [rightOnes])

  return { toggleAudio, soundStatusIcon }
}

export default useAudioController