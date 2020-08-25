import { useEffect, useState } from 'react'
import '../../assets/stylesheets/cards.scss'
import images from '../../helpers/images_loader'
import shuffleArray from '../../helpers/array'
import giveMeOneColor from '../../helpers/color_random'
import { useStore } from 'react-context-hook'


const usePrepareDeck = (cardsArray) => {
  const [cards, setCards] = useState([])
  const [started] = useStore('started')


  const includeImageAndColor = cardsArray => {
    const localCardsArray = [ ...cardsArray ]
    const color = giveMeOneColor()

    return localCardsArray.map(result => {
      const newResult = { ...result }
      newResult.image = images.pop()
      newResult.color = color
      return newResult
    })
  }

  const includeId = cardsArray => {
    const localCardsArray = [ ...cardsArray ]

    return localCardsArray.map((result, index) => {
      const newResult = { ...result }
      newResult.id = index
      return newResult
    })
  }

  const doubleArrayItems = cardsArray => {
    const localCardsArray = [ ...cardsArray ]
    return localCardsArray.concat(localCardsArray)
  }

  useEffect(() => {
    if(started) return
    setTimeout(() => {
      setCards([])
      let localCards = [ ...cardsArray ]
      localCards = includeImageAndColor(localCards)
      localCards = doubleArrayItems(localCards)
      localCards = includeId(localCards)
      localCards = shuffleArray(localCards)
      setCards(localCards)
    },1000)

  }, [started])

  return cards
}

export default usePrepareDeck