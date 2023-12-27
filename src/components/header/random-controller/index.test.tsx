import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { RandomModeButton } from '.'

jest.mock('../../../stores/random-mode-store', () => ({
  useGlobalRandomModeStore: () => ({
    randomMode: false,
    setRandomMode: jest.fn()
  })
}))

describe('RandomModeButton', () => {
  it('should render correctly', () => {
    render(<RandomModeButton />)

    const button = screen.getByRole('button', {
      name: /Enable random mode/i
    })

    expect(button).toBeInTheDocument()
  })
})
