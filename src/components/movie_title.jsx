import React from 'react';
import '../stylesheets/movie_title.scss'
import PropTypes from 'prop-types';
import giveMeOneColor from '../helpers/color_random'

const MovieTitle = ({ movieTitle }) => {
  return (
   <div className="movie-title" style={giveMeOneColor()}>
     <div className="star">STAR</div>
     <div className="movie-name">{movieTitle}</div>
     <div className="wars">WARS</div>
   </div>
  )
}

MovieTitle.propTypes = {}

export default MovieTitle