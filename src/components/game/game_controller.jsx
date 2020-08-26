import { useEffect, useState } from 'react';
import '../../assets/stylesheets/cards.scss'
import { useStore } from 'react-context-hook'
import initialStore from '../../helpers/initial_store'
import useAudioController from '../audio/audio_controller'

/**
 * This is the hook that control the whole game
 * Most of the application global store values are being modified only here as a way to prevent
 * errors on manipulating the store
 *
 * @param cardsNumber - number of distinct cards that will be used in the game
 * @returns {{seconds: number, restart: restart, soundStatusIcon: any, toggleAudio: toggleAudio}}
 */
const useGameController = (cardsNumber) => {
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(null)
  const [selected, setSelected] = useStore('selected')
  const [rightOnes, setRightOnes] = useStore('rightOnes')
  const [started, setStarted] = useStore('started')
  const [bestTime, setBestTime] = useStore('bestTime')
  const [gameSize, setGameSize] = useStore('gameSize')
  const { toggleAudio, soundStatusIcon } = useAudioController({ started, rightOnes, gameSize, selected })

  useEffect(() => { setGameSize(cardsNumber) }, [cardsNumber])

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