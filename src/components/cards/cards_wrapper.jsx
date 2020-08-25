import React, { useEffect, useState } from 'react'
import '../../assets/stylesheets/cards.scss'
import PropTypes from 'prop-types'
import Card from './card'
import usePrepareDeck from './prepare_deck'

const CardsWrapper = ({ mockData }) => {
  const movies = usePrepareDeck([...mockData.results ])

  return (
    <div className="movies-wrapper">
      {movies.map(result => <Card dat={result} key={result.id} />)}
    </div>
  )
}

CardsWrapper.propTypes = {}

export default CardsWrapper