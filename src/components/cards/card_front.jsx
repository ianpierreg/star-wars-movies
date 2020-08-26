import React from 'react'
import PropTypes from 'prop-types'
import Stars from '../common/stars'

const CardFront = ({ color }) => (
  <div className="front metal">
    <div className="front-face-wrapper">
      <div className="name-wrapper">
        <Stars />
        <div className="star" style={color}>STAR</div>
        <div className="wars" style={color}>WARS</div>
      </div>
    </div>
  </div>
)

CardFront.propTypes = {
  color: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default CardFront
