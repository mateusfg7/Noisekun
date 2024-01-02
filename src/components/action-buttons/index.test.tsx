import { render, screen } from '@testing-library/react'
import { ActionButtons } from '.'

describe('Action Buttons', () => {
  it('should render without errors', async () => {
    render(<ActionButtons />)

    expect(await screen.findByTestId('action-buttons')).toBeInTheDocument()
  })
})
