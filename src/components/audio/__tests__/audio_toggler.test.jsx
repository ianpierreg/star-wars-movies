import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AudioToggler from '../audio_toggler'

describe('test the AudioToggler component', () => {
  let rendered
  const toggleAudio = jest.fn()
  const imageSrc = '/should/be/img/link'
  beforeEach(() => {
    rendered = render(
      <AudioToggler
        toggleAudio={toggleAudio}
        soundStatusIcon={imageSrc}
      />
    )
  })

  it('should call toggleAudio function on click', () => {
    fireEvent.click(rendered.getByRole('button'))
    expect(toggleAudio).toHaveBeenCalled()
  })

  it('should show sound icon element', () => {
    const imageElement = rendered.getByAltText('controle de som')
    expect(imageElement).toBeVisible()
    expect(imageElement.src).toContain(imageSrc)
  })
})
