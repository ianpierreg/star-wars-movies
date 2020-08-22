import React, {useEffect} from 'react';
import '../assets/stylesheets/movie_title.scss'
import PropTypes from 'prop-types';

const MovieTitle = ({ movieTitle, color }) => {

  return (
   <div className="movie-title">
     <div className="star" style={color}>STAR</div>
     <div className="movie-name">{movieTitle}</div>
     <div className="wars" style={color}>WARS</div>
   </div>
  )
}

MovieTitle.propTypes = {}

export default MovieTitle