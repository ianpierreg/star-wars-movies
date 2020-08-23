import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/cards.scss'
import PropTypes from 'prop-types';
import MovieTitle from './movie_title';
import { useStore } from 'react-context-hook'
import giveMeOneColor from "../helpers/color_random";

const Card = ({ dat }) => {
  const data = { ...dat }
  const [clicked, setClicked] = useState(false)
  const [className, setClassName] = useState('')
  const [selected, setSelected] = useStore('selected')
  const [started] = useStore('started')
  const [rightOnes] = useStore('rightOnes')

  useEffect(() => {setClassName(classes())}, [clicked])

  useEffect(() => {
    if (!started) {
      setClicked(false)
      setClassName(classes())
      return
    }

    setTimeout(() => setClassName(classes()), (data.id+1)*100)
  }, [started])

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
    const newClasses = ['card']
    if(started) newClasses.push('show')
    if(clicked) newClasses.push('clicked')
    return newClasses.join(' ')
  }

  return (
    <div className={className} onClick={started ? setMeAsSelected : () => {}} style={{ marginLeft: data.id*5+'px'}}>
      <div className='content'>
        <div className='front metal'>
          <div className='module'>
            <div id='stars'/>
            <div className="name-wrapper">
              <div className="star" style={data.color}>STAR</div>
              <div className="wars" style={data.color}>WARS</div>
            </div>
          </div>
        </div>
        <div className='back metal'>
          <div className='moduletwo'>
            <img alt='alguma imagem do star wars' src={data.image} />
            <MovieTitle movieTitle={data.title} />
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default Card