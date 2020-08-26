import React from 'react'
import { render } from '@testing-library/react'
import CardBack from '../card_back'

describe('test the CardBack component', () => {
  let rendered
  const title = 'back card title'
  const imgSrc = 'should/be/img/link'
  beforeEach(() => {
    rendered = render(
      <CardBack
        title={title}
        image={imgSrc}
      />
    )
  })

  it('should show image', () => {
    const imageElement = rendered.getByAltText(title)
    expect(imageElement).toBeVisible()
    expect(imageElement.src).toContain(imgSrc)
  })

  it('should show title', () => {
    expect(rendered.getByText(title)).toBeVisible()
  })
})
