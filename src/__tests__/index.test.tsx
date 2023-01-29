import { render, screen } from '@testing-library/react'
import Home from '../pages'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('Renders the page heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Noisekun/i
    })
    expect(heading).toBeInTheDocument()
  })
})
