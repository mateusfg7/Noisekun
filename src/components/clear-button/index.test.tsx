import { render, screen } from '@testing-library/react'
import { ClearButton } from '.'
import { SoundState, useSoundsStateStore } from '~/stores/sounds-state-store'

jest.mock('../../stores/sounds-state-store')

describe('Clear Button', () => {
  it('should render', async () => {
    ;(useSoundsStateStore as unknown as jest.Mock).mockImplementation(
      () => [] as SoundState[]
    )

    render(<ClearButton />)

    const button = await screen.findByRole('button', { name: /clear/i })
    expect(button).toBeInTheDocument()
  })

  it('should not be disabled', async () => {
    ;(useSoundsStateStore as unknown as jest.Mock).mockImplementation(
      () =>
        [
          { active: true, id: 'd4ad48e', loaded: true, volume: 1 }
        ] as SoundState[]
    )

    render(<ClearButton />)

    const button = await screen.findByRole('button', { name: /clear/i })

    expect(button.getAttribute('disabled')).toBeNull()
  })

  it('should be disabled', async () => {
    ;(useSoundsStateStore as unknown as jest.Mock).mockImplementation(
      () =>
        [
          { active: false, id: 'd4ad48e', loaded: true, volume: 1 }
        ] as SoundState[]
    )

    render(<ClearButton />)

    const button = await screen.findByRole('button', { name: /clear/i })

    expect(button.getAttribute('disabled')).not.toBeNull()
  })
})
