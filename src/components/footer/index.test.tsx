import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)

    const element = screen.getByRole('contentinfo')

    expect(element).toBeInTheDocument()
  })
})
