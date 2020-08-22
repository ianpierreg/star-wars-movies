import React from 'react';
import '../movie_title.scss'
import PropTypes from 'prop-types';

const MovieTitle = ({ movieTitle }) => {
  return (
   <div className="movie-title">
     <div className="star">STAR</div>
     <div className="movie-name">{movieTitle}</div>
     <div className="wars">WARS</div>
   </div>
  )
}

MovieTitle.propTypes = {}

export default MovieTitle