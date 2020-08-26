import React from 'react'
import { render } from '@testing-library/react'
import PageLoader from '../page_loader'

describe('test the CardBack component', () => {
  let rendered
  beforeEach(() => {
    rendered = render(<PageLoader />)
  })

  it('should show image', () => {
    const imageElement = rendered.getByAltText('carregando...')
    expect(imageElement).toBeVisible()
    expect(imageElement.src).toContain('loader.gif')
  })
})
