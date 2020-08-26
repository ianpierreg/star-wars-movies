import React from 'react'
import { render } from '@testing-library/react'
import CardFront from '../card_front'
import giveMeOneColor from '../../../helpers/color_random'

describe('test CardFront component', () => {
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
