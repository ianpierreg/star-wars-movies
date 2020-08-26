import React from 'react'
import { render } from '@testing-library/react'
import Card from '../card'
import giveMeOneColor from '../../../helpers/color_random'

const card = {
    id: 1,
    title: 'First card',
    episode_id: 2,
    image: 'some/image/here.png',
    color: giveMeOneColor()
  }
]
describe('test CardsWrapper component', () => {
  let rendered
  const color = giveMeOneColor()
  beforeEach(() => {
    rendered = render(
      <Card color={color} />
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
