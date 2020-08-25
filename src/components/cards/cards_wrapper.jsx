import React, { useEffect, useState } from 'react'
import '../../assets/stylesheets/cards.scss'
import PropTypes from 'prop-types'
import Card from './card'
import usePrepareDeck from './prepare_deck'

const CardsWrapper = ({ mockData }) => {
  const cards = usePrepareDeck([...mockData.results])

  return (
    <div className="movies-wrapper">
      {cards.map(card => <Card card={card} key={card.id} />)}
    </div>
  )
}

CardsWrapper.propTypes = {}

export default CardsWrapper