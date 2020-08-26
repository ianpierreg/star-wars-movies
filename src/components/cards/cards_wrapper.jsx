import React from 'react'
import '../../assets/stylesheets/cards.scss'
import PropTypes from 'prop-types'
import Card from './card'
import usePrepareDeck from './prepare_deck'

const CardsWrapper = ({ cards }) => {
  const deck = usePrepareDeck(cards)

  return (
    <div className="movies-wrapper">
      {deck.map(card => <Card card={card} key={card.id} />)}
    </div>
  )
}

CardsWrapper.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      episode_id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      color: PropTypes.object
    })
  ).isRequired
}

export default CardsWrapper