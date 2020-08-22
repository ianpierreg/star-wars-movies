import React, { useState, useEffect } from 'react';
import '../stylesheets/cards.scss'
import PropTypes from 'prop-types';
import MovieTitle from './movie_title';

const Card = ({ data }) => {
  const theme = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false)
  const [className, setClassName] = useState('')

  useEffect(() => {
    setClassName(classes())
  }, [clicked])


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