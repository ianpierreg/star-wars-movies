import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../assets/stylesheets/cards.scss'
import { useStore } from 'react-context-hook'
import initialStore from '../../helpers/initial_store'
import CardFront from './card_front'
import CardBack from './card_back'

const Card = ({ card }) => {
  const [clicked, setClicked] = useState(false)
  const [className, setClassName] = useState('card hide')
  const [selected, setSelected] = useStore('selected')
  const [started] = useStore('started')
  const [rightOnes] = useStore('rightOnes')

  const classes = () => {
    const newClasses = ['card']
    newClasses.push(started ? 'show' : 'hide')
    if (clicked) newClasses.push('clicked')

    return newClasses.join(' ')
  }

  useEffect(() => { setClassName(classes()) }, [clicked])

  useEffect(() => {
    if (!started) setClicked(false)
    setClassName(classes())
  }, [started])

  const setMeAsSelected = () => {
    const { id, episode_id: episodeId } = card
    if (rightOnes.includes(episodeId)) return
    const { firstSelected, secondSelected } = selected
    let itemsStoreTemplate = { ...initialStore.selected }
    const noCardsSelected = firstSelected.id === -1 && secondSelected.id === -1
    const firstCardSelected = firstSelected.id !== -1 && secondSelected.id === -1
    const bothCardsSelected = firstSelected.id !== -1 && secondSelected.id !== -1

    if (noCardsSelected || bothCardsSelected) {
      itemsStoreTemplate = { ...itemsStoreTemplate, firstSelected: { id, episodeId }}
    } else if (firstCardSelected) {
      if (firstSelected.id === id) return
      itemsStoreTemplate = { firstSelected, secondSelected: { id, episodeId }}
    }

    setSelected(itemsStoreTemplate)
  }

  useEffect(() => {
    const { firstSelected, secondSelected } = selected
    const { id, episode_id: episodeId } = card
    const shouldSetClicked = firstSelected.id === id || secondSelected.id === id || rightOnes.includes(episodeId)

    setClicked(shouldSetClicked)
  }, [selected])

  return (
    <div
      className={className}
      onClick={started ? setMeAsSelected : () => {}}
      role="button"
    >
      <div className="content">
        <CardFront color={card.color} />
        <CardBack image={card.image} title={card.title} />
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    episode_id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.object
  }).isRequired
}

export default Card
