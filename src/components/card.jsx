import React, { useState, useEffect } from 'react';
import '../stylesheets/cards.scss'
import PropTypes from 'prop-types';
import MovieTitle from './movie_title';
import { useStore } from 'react-context-hook'

const Card = ({ data }) => {
  const [lastSelected, setLastSelected] = useStore('lastSelected')
  const [clicked, setClicked] = useState(false)
  const [className, setClassName] = useState('')

  useEffect(() => {
    if (!clicked) {
      setClassName(classes())
    } else {
      const { episode_id: episodeId } = data
      if(lastSelected === -1) {
        setLastSelected(episodeId)
        setClassName(classes())
      } else if (lastSelected === episodeId) {
        setClassName(classes())
      } else {
        setLastSelected(-1)
      }
    }
  }, [clicked])


  useEffect(() => {
    console.log('ll', lastSelected)
    if (lastSelected === -1) {
      setClicked(false)
    }
  }, [lastSelected])


  const classes = () => {
    let newClass = 'card'
    if(clicked) newClass = `${newClass} clicked`
    return newClass
  }

  return (
    <div className={className} onClick={() => setClicked(true)}>
      <div className='content'>
        <div className='front metal'>
          <div className='module'>

          </div>
        </div>
        <div className='back metal'>
          <div className='moduletwo'>
            <img alt='' src={data.image} />
            <MovieTitle movieTitle={data.title} color={data.color} />
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default Card