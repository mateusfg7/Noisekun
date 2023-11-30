import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '~/app/[locale]/page'

describe('Home', () => {
  it('Renders the page heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Noisekun/i
    })

    expect(heading).not.toBeNull()
  })
})
