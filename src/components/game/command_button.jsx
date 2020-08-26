import React from 'react'
import PropTypes from 'prop-types'
import { useStore } from 'react-context-hook'

const CommandButton = ({ restart }) => {
  const [rightOnes] = useStore('rightOnes')
  const [gameSize] = useStore('gameSize')
  const [started] = useStore('started')

  const isGameWon = () => rightOnes.length === gameSize && gameSize > 0

  const buttonText = () => {
    if (!started) return 'Iniciar'
    if (isGameWon()) return 'Embaralhar'
    return 'Desistir'
  }

  const buttonClass = () => {
    const newClass = 'main-button'
    if (!started) return `${newClass} yellow`
    if (isGameWon()) return `${newClass} blue`
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
