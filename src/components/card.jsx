import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/cards.scss'
import PropTypes from 'prop-types';
import MovieTitle from './movie_title';
import { useStore } from 'react-context-hook'

const Card = ({ dat }) => {
  const data = { ...dat }
  const [clicked, setClicked] = useState(false)
  const [className, setClassName] = useState('')
  const [selected, setSelected] = useStore('selected')
  const [rightOnes] = useStore('rightOnes')

  useEffect(() => {setClassName(classes())}, [clicked])

  const setMeAsSelected = () => {
    const { firstSelected, secondSelected } = selected
    const { id, episode_id: episodeId } = data
    if(rightOnes.includes(episodeId)) return
    let itemsSelected =  {
      firstSelected: { id: -1, episodeId: -1 },
      secondSelected: { id: -1, episodeId: -1 }
    }
    if ((firstSelected.id === -1 && secondSelected.id === -1) || (firstSelected.id !== -1 && secondSelected.id !== -1)) {
      itemsSelected = { ...itemsSelected, firstSelected: { id, episodeId }}
    } else if (firstSelected.id !== -1 && secondSelected.id === -1) {
      if (firstSelected.id === id) return
      itemsSelected = { firstSelected, secondSelected: { id, episodeId }}
    }

    setSelected(itemsSelected)
  }

  useEffect(() => {
    const { firstSelected, secondSelected } = selected
    const { id, episode_id: episodeId } = data
    if (firstSelected.id === id || secondSelected.id === id || rightOnes.includes(episodeId)) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }, [selected])


  const classes = () => {
    let newClass = 'card'
    if(clicked) newClass = `${newClass} clicked`
    return newClass
  }

  return (
    <div className={className} onClick={setMeAsSelected}>
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