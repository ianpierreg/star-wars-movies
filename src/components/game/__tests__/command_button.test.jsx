import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import CommandButton from '../command_button'
import { store } from 'react-context-hook'
import StoreMock from "../../../../mocks/store_mock";

describe('test the CommandButton component', () => {
  let rendered
  const restart = jest.fn()
  beforeEach(() => {
    rendered = render(
      <StoreMock>
        <CommandButton restart={restart} />
      </StoreMock>
    )
  })

  it('should show button for not started game', () => {
    const button = rendered.getByText('Iniciar')
    expect(button).toBeVisible()
    expect(button).toHaveClass('main-button yellow')
  })

  it('should show button game game started', () => {
    store.set('started', true)
    const button = rendered.getByText('Desistir')
    expect(button).toBeVisible()
    expect(button).toHaveClass('main-button red')
  })

  it('should show button for won game', () => {
    store.set('started', true)
    store.set('gameSize', 3)
    store.set('rightOnes', [1, 2, 3])

    const button = rendered.getByText('Embaralhar')
    expect(button).toBeVisible()
    expect(button).toHaveClass('main-button blue')
  })

  it('should test button click', () => {
    const button = rendered.getByText('Embaralhar')
    fireEvent.click(button)
    expect(restart).toHaveBeenCalled()
  })
})
