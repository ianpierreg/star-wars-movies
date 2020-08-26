import { useEffect, useState } from 'react'
import '../../assets/stylesheets/cards.scss'
import images from '../../helpers/images_loader'
import shuffleArray from '../../helpers/array'
import giveMeOneColor from '../../helpers/color_random'
import { useStore } from 'react-context-hook'

/**
 * This custom hook will manipulate the array of card
 * (including parameters on the card object, shuffling and doubling array of cards and so on)
 * @param cardsArray - array of distinct cards that will be used to construct the game deck
 * @returns {*[]} - deck of card ready to be used in the game
 */
const usePrepareDeck = cardsArray => {
  const [cards, setCards] = useState([])
  const [started] = useStore('started')

  const includeImageAndColor = cardsArray => {
    const localCardsArray = [...cardsArray]
    const color = giveMeOneColor()
    let imagesCopy = [...images]
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

  useEffect(() => {
    if(started || cardsArray.length === 0) return
    setTimeout(() => {
      setCards([])
      let localCards = [...cardsArray]
      localCards = includeImageAndColor(localCards)
      localCards = doubleArrayItems(localCards)
      localCards = includeId(localCards)
      localCards = shuffleArray(localCards)
      setCards(localCards)
    },1000)

  }, [started, cardsArray])

  return cards
}

export default usePrepareDeck