import React, {useEffect} from 'react';
import '../assets/stylesheets/movie_title.scss'
import PropTypes from 'prop-types';

const MovieTitle = ({ movieTitle }) => {

  return (
   <div className="movie-title">
     <div className="movie-name">{movieTitle}</div>
   </div>
  )
}

MovieTitle.propTypes = {}

export default MovieTitle