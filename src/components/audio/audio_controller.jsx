import { useEffect, useState } from 'react'
import '../../assets/stylesheets/cards.scss'
import soundOn from '../../assets/images/soundOn.png'
import soundOff from '../../assets/images/soundOff.png'

/**
 * This is the custom hook that will control the whole audio played in the game
 *
 *  @param started - bool value to determine if the game has started
 * @param rightOnes - array card type that the user has got right in the game
 * @param gameSize - size of the game
 * @param selected - object with the two last selected cards
 * @returns {{
   * soundStatusIcon: image for the audio toggle button
   * toggleAudio: function to toggle audio
 * }}
 */
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
     if(mounted && !shouldPauseSounds) selectedCardSound.play()
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
    themeMusic.play()
    themeMusic.loop = true
    themeMusic.volume = 0.03
    startGameSound.volume = 0.05
    selectedCardSound.volume = 0.05
    endGameSound.volume = 0.1
    winGameSound.volume = 0.5
  }, [])

  useEffect(() => {
    if(mounted && !shouldPauseSounds) {
       started ? startGameSound.play() : endGameSound.play()
    }
  }, [started])


  useEffect(() => {
     if(rightOnes.length === gameSize && mounted && !shouldPauseSounds) winGameSound.play()
  }, [rightOnes])

  return { toggleAudio, soundStatusIcon }
}

export default useAudioController