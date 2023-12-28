import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SoundState, useSoundsStateStore } from '~/stores/sounds-state-store'
import { Clear } from '.'

describe('Clear Button', () => {
  it('should render', async () => {
    render(<Clear />)

    const button = await screen.findByRole('button', { name: /clear/i })
    expect(button).toBeInTheDocument()
  })

  it('should be enabled', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<Clear />)

    act(() => {
      bulkUpdate([{ active: true, id: 'rain', loaded: true, volume: 1 }])
    })

    expect(await screen.findByRole('button', { name: /clear/i })).toBeEnabled()
  })

  it('should be disabled', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<Clear />)

    act(() => {
      bulkUpdate([{ active: false, id: 'rain', loaded: true, volume: 1 }])
    })

    expect(await screen.findByRole('button', { name: /clear/i })).toBeDisabled()
  })

  it('calls `bulkUpdate` when clear button is clicked', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<Clear />)

    const soundsListExample: SoundState[] = [
      { active: false, id: 'rain', loaded: true, volume: 1 },
      { active: true, id: 'waterfall', loaded: true, volume: 1 },
      { active: false, id: 'plane', loaded: true, volume: 1 },
      { active: true, id: 'water', loaded: true, volume: 1 },
      { active: false, id: 'drops', loaded: true, volume: 1 },
      { active: true, id: 'cafe', loaded: true, volume: 1 },
      { active: false, id: 'birds', loaded: true, volume: 1 },
      { active: true, id: 'brown-noise', loaded: true, volume: 1 }
    ]

    act(() => {
      bulkUpdate(soundsListExample)
    })

    const clearButton = await screen.findByRole('button', { name: /clear/i })

    expect(clearButton).toBeEnabled()

    await userEvent.click(clearButton)

    expect(clearButton).toBeDisabled()
  })
})
