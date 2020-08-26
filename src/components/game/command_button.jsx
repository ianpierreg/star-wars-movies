import React from 'react'
import PropTypes from 'prop-types'
import { useStore } from 'react-context-hook'

const CommandButton = ({ restart }) => {
  const [rightOnes] = useStore('rightOnes')
  const [gameSize] = useStore('gameSize')
  const [started] = useStore('started')

  const buttonText = () => {
    if (!started) return 'Iniciar'
    if (rightOnes.length === gameSize) return 'Embaralhar'
    return 'Desistir'
  }

  const buttonClass = () => {
    const newClass = 'main-button'
    if (!started) return `${newClass} yellow`
    if (rightOnes.length === gameSize) return `${newClass} blue`
    return `${newClass} red`
  }

  return (
    <div className="main-button-wrapper">
      <button
        type="button"
        onClick={restart}
        className={buttonClass()}
      >
        {buttonText()}
      </button>
    </div>
  )
}

CommandButton.propTypes = {
  restart: PropTypes.func.isRequired
}

export default CommandButton
