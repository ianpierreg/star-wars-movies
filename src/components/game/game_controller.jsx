import { useEffect, useState } from 'react';
import '../../assets/stylesheets/cards.scss'
import { useStore } from 'react-context-hook'
import initialStore from '../../helpers/initial_store'
import soundOn from "../../assets/images/soundOn.png";
import soundOff from "../../assets/images/soundOff.png";
import useAudioController from "../audio/audio_controller";

const useGameController = (cardsLength) => {
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(null)
  const [selected, setSelected] = useStore('selected')
  const [rightOnes, setRightOnes] = useStore('rightOnes')
  const [started, setStarted] = useStore('started')
  const [bestTime, setBestTime] = useStore('bestTime')
  const [gameSize, setGameSize] = useStore('gameSize')
  const { toggleAudio, soundStatusIcon } = useAudioController({ started, rightOnes, gameSize, selected })

  useEffect(() => {setGameSize(cardsLength)}, [])

  useEffect(() => {
    const { firstSelected, secondSelected } = selected
    if(firstSelected.episodeId === secondSelected.episodeId && firstSelected.episodeId !== -1) {
      setRightOnes([...rightOnes, firstSelected.episodeId])
    }
  }, [selected])

  useEffect(() => {
    if (!started) {
      clearInterval(timer)
    } else {
      setSeconds(0)
      const interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000)
      setTimer(interval)
    }
  }, [started])


  useEffect(() => {
    if(rightOnes.length !== gameSize) return
    if (seconds < bestTime || bestTime === 0) setBestTime(seconds)
    clearInterval(timer)
  }, [rightOnes])

  const restart = () => {
    setRightOnes([])
    const itemsStoreTemplate = { ...initialStore.selected }
    setSelected(itemsStoreTemplate)
    setStarted(!started)
  }

  return { seconds, restart, toggleAudio, soundStatusIcon }
}

export default useGameController