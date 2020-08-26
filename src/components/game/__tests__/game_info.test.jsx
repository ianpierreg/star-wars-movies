import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import GameInfo from '../game_info'
import { store } from 'react-context-hook'
import StoreMock from '../../../../mocks/store_mock'

describe('test the GameInfo component', () => {
  let rendered
  const seconds = 1049
  const bestTime = 532
  beforeEach(() => {
    rendered = render(
      <StoreMock>
        <GameInfo restart={jest.fn()} seconds={seconds} />
      </StoreMock>
    )
  })

  it('should show current game time', () => {
    expect(rendered.getByText(`Seu tempo:${seconds}`)).toBeVisible()
  })

  it('should show best time', () => {
    store.set('bestTime', bestTime)
    expect(rendered.getByText(`Melhor tempo:${bestTime}`)).toBeVisible()
  })
})
