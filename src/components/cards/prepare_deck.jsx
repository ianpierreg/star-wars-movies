import { useEffect, useState } from 'react'
import '../../assets/stylesheets/cards.scss'
import { useStore } from 'react-context-hook'
import images from '../../helpers/images_loader'
import shuffleArray from '../../helpers/array'
import giveMeOneColor from '../../helpers/color_random'

/**
 * This custom hook will manipulate the array of cards and turn it into a memory card deck

 * @param cards - array of distinct cards that will be used to construct the game deck
 * @returns {*[]} - deck of card ready to be used in the game
 */
const usePrepareDeck = cards => {
  const [deck, setDeck] = useState([])
  const [started] = useStore('started')

  const includeImageAndColor = cardsArray => {
    const localCardsArray = [...cardsArray]
    const color = giveMeOneColor()
    const imagesCopy = [...images]
    return localCardsArray.map(result => {
      const newResult = { ...result }
      newResult.image = imagesCopy.pop()
      newResult.color = color
      return newResult
    })
  }

  const includeId = cardsArray => {
    const localCardsArray = [...cardsArray]
    return localCardsArray.map((result, index) => {
      const newResult = { ...result }
      newResult.id = index
      return newResult
    })
  }

  const doubleArrayItems = cardsArray => {
    const localCardsArray = [...cardsArray]
    return localCardsArray.concat(localCardsArray)
  }

  const manipulateCardsAndCreateDeck = () => {
    setDeck([])
    let localCards = [...cards]
    localCards = includeImageAndColor(localCards)
    localCards = doubleArrayItems(localCards)
    localCards = includeId(localCards)
    localCards = shuffleArray(localCards)
    setDeck(localCards)
  }

  useEffect(() => {
    if (started || cards.length === 0) return
    setTimeout(() => {
      manipulateCardsAndCreateDeck()
    }, 1000)
  }, [started, cards])

  return deck
}

export default usePrepareDeck
