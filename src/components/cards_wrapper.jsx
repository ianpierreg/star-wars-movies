import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/cards.scss'
import PropTypes from 'prop-types'
import Card from './card'
import images from '../helpers/images_loader'
import shuffleArray from '../helpers/array'
import giveMeOneColor from '../helpers/color_random'
import { useStore } from 'react-context-hook'
import usePrepareMoviesArray from './prepare_movies_array'

const CardsWrapper = ({ mockData }) => {
  const movies = usePrepareMoviesArray([...mockData.results ])

  return (
    <div className="movies-wrapper">
      {movies.map(result => <Card dat={result} key={result.id} />)}
    </div>
  )
}

CardsWrapper.propTypes = {}

export default CardsWrapper