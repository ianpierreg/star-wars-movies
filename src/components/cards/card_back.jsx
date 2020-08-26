import React from 'react'
import PropTypes from 'prop-types'

const CardBack = ({ title, image }) => (
  <div className="back metal">
    <div className="back-face-wrapper">
      <img alt={title} src={image} />
      <div className="movie-title">
        <div className="movie-name">{title}</div>
      </div>
    </div>
  </div>
)

CardBack.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default CardBack
