import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/cards.scss'
import PropTypes from 'prop-types'
import Card from './card'
import images from '../helpers/images_loader'
import shuffleArray from '../helpers/array'
import giveMeOneColor from '../helpers/color_random'
import { useStore } from 'react-context-hook'


const usePrepareMoviesArray = (moviesArray) => {
  const [started] = useStore('started')

  const [movies, setMovies] = useState([])

  const includeImageAndColor = moviesArray => {
    const localMoviesArray = [ ...moviesArray ]
    const color = giveMeOneColor()

    return localMoviesArray.map(result => {
      const newResult = { ...result }
      newResult.image = images.pop()
      newResult.color = color
      return newResult
    })
  }

  const includeId = moviesArray => {
    const localMoviesArray = [ ...moviesArray ]

    return localMoviesArray.map((result, index) => {
      const newResult = { ...result }
      newResult.id = index
      return newResult
    })
  }

  const doubleArrayItems = moviesArray => {
    const localMoviesArray = [ ...moviesArray ]
    return localMoviesArray.concat(localMoviesArray)
  }

  useEffect(() => {
    if(started) return
    setMovies([])
    let localMovies = [ ...moviesArray ]
    localMovies = includeImageAndColor(localMovies)
    localMovies = doubleArrayItems(localMovies)
    localMovies = includeId(localMovies)
    localMovies = shuffleArray(localMovies)
    setMovies(localMovies)
  }, [started])

  return movies
}

usePrepareMoviesArray.propTypes = {}

export default usePrepareMoviesArray