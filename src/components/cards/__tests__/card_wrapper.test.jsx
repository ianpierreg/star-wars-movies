import React from 'react'
import { render } from '@testing-library/react'
import CardsWrapper from '../cards_wrapper'
import giveMeOneColor from '../../../helpers/color_random'

const cards = [
  {
    id: 1,
    title: 'First card',
    episode_id: 2,
    image: 'some/image/here1.png',
    color: giveMeOneColor()
  },
  {
    id: 2,
    title: 'Second card',
    episode_id: 2,
    image: 'some/image/here2.png',
    color: giveMeOneColor()
  },
  {
    id: 3,
    title: 'Third card',
    episode_id: 1,
    image: 'some/image/here3.png',
    color: giveMeOneColor()
  }
]
describe('test CardsWrapper component', () => {
  let rendered
  const color = giveMeOneColor()
  beforeEach(() => {
    rendered = render(
      <CardFront color={color} />
    )
  })

  it('should show text', () => {
    expect(rendered.getByText('STAR')).toBeVisible()
    expect(rendered.getByText('WARS')).toBeVisible()
  })

  it('should have text color passed on props', () => {
    expect(rendered.getByText('STAR').style).toHaveProperty('text-shadow', color.textShadow)
    expect(rendered.getByText('WARS').style).toHaveProperty('text-shadow', color.textShadow)
  })
})
