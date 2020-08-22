import React from 'react';
import '../cards.scss'
import PropTypes from 'prop-types';
import MovieTitle from "./movie_title";

const Card = ({ data }) => {
  console.log(data)
  return (
    <div className='card'>
      <div className='content'>
        <div className='front metal'>
          <div className='module'>
            <img alt=''
                 src='https://college.lclark.edu/live/image/gid/530/width/1260/height/630/crop/1/71211_star_wars.jpg'/>
            <MovieTitle movieTitle={data.title} />
          </div>
        </div>
        <div className='back metal'>
          <div className='moduletwo'>
            {data.title}
            <p>Diretor: {data.director}</p>
            <p>Ano do Filme: {data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default Card