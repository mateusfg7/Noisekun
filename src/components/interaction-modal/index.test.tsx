import {
  act,
  cleanup,
  render,
  renderHook,
  screen,
  waitFor
} from '@testing-library/react'
import { InteractionModal } from '.'
import userEvent from '@testing-library/user-event'
import { useUserInteractionStore } from '~/stores/user-interaction-store'
import { useSoundsStateStore } from '~/stores/sounds-state-store'

// @ts-expect-error
global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
}

describe('Interaction Modal', () => {
  it('should render correctly', async () => {
    render(<InteractionModal />)

    expect(await screen.findByRole('dialog')).toBeInTheDocument()
  })

  it('should close modal and change `useHasInteracted` to true', async () => {
    const { result } = renderHook(() => useUserInteractionStore())

    render(<InteractionModal />)

    expect(result.current.userHasInteracted).toBeFalsy()

    await userEvent.click(screen.getByRole('button', { name: /Play/i }))

    expect(result.current.userHasInteracted).toBeTruthy()

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('should cancel active sounds and close modal', async () => {
    const { result } = renderHook(() => useSoundsStateStore())

    render(<InteractionModal />)

    act(() => {
      result.current.bulkUpdate([
        { active: true, id: 'rain', loaded: true, volume: 1 },
        { active: false, id: 'waterfall', loaded: true, volume: 1 },
        { active: true, id: 'birds', loaded: true, volume: 1 },
        { active: false, id: 'coffee-shop', loaded: true, volume: 1 },
        { active: true, id: 'plane', loaded: true, volume: 1 },
        { active: false, id: 'storm', loaded: true, volume: 1 }
      ])
    })

    expect(result.current.sounds.some(sound => sound.active)).toBeTruthy()

    await userEvent.click(screen.getByRole('button', { name: /Cancel/i }))

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    expect(result.current.sounds.some(sound => sound.active)).toBeFalsy()
  })
})
