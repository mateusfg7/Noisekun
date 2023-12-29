import {
  act,
  fireEvent,
  render,
  renderHook,
  screen
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useSoundsStateStore } from '~/stores/sounds-state-store'
import { SaveCombo } from '.'
import { useComboStore } from '~/stores/combo-store'

describe('Save Combo Button', () => {
  it('should render', async () => {
    render(<SaveCombo />)

    const button = await screen.findByRole('button', { name: /save/i })

    expect(button).toBeInTheDocument()
  })

  it('should be enabled', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<SaveCombo />)

    act(() => {
      bulkUpdate([{ active: true, id: 'rain', loaded: true, volume: 1 }])
    })

    const button = await screen.findByRole('button', { name: /save/i })

    expect(button).toBeEnabled()
  })

  it('should be disabled', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<SaveCombo />)

    act(() => {
      bulkUpdate([{ active: false, id: 'rain', loaded: true, volume: 1 }])
    })

    const button = await screen.findByRole('button', { name: /save/i })

    expect(button).toBeDisabled()
  })

  it('should show combo name input', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<SaveCombo />)

    act(() => {
      bulkUpdate([
        { active: true, id: 'rain', loaded: true, volume: 1 },
        { active: true, id: 'plain', loaded: true, volume: 0.5 }
      ])
    })

    const button = await screen.findByRole('button', { name: /save/i })

    userEvent.click(button)

    expect(await screen.findByRole('textbox')).toBeInTheDocument()
  })

  it('should save combo', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))
    const { result } = renderHook(() => useComboStore())

    render(<SaveCombo />)

    act(() => {
      bulkUpdate([
        { active: true, id: 'rain', loaded: true, volume: 1 },
        { active: true, id: 'plain', loaded: true, volume: 0.5 }
      ])
    })

    const button = await screen.findByRole('button', { name: /save/i })
    await userEvent.click(button)

    const input = await screen.findByRole('textbox')
    fireEvent.change(input, { target: { value: 'My Combo' } })
    await userEvent.click(button)

    const targetCombo = result.current.combos[0]
    const expectedCombo = {
      name: 'My Combo',
      sounds: [
        { active: true, id: 'rain', loaded: true, volume: 1 },
        { active: true, id: 'plain', loaded: true, volume: 0.5 }
      ],
      theme: 'transition'
    }

    expect(input).not.toBeInTheDocument()
    expect(targetCombo.name).toBe(expectedCombo.name)
    expect(targetCombo.theme).toBe(expectedCombo.theme)
    expect(targetCombo.sounds).toStrictEqual(expectedCombo.sounds)
  })

  it('should not save combo without a name', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<SaveCombo />)

    act(() => {
      bulkUpdate([
        { active: true, id: 'rain', loaded: true, volume: 1 },
        { active: true, id: 'plain', loaded: true, volume: 0.5 }
      ])
    })

    const button = await screen.findByRole('button', { name: /save/i })
    await userEvent.click(button)

    const input = await screen.findByRole('textbox')
    await userEvent.click(button)

    expect(input).toBeInTheDocument()
  })

  it('should not save combo when sound is disabled during naming process', async () => {
    const {
      result: { current: bulkUpdate }
    } = renderHook(() => useSoundsStateStore(store => store.bulkUpdate))

    render(<SaveCombo />)

    act(() => {
      bulkUpdate([
        { active: true, id: 'rain', loaded: true, volume: 1 },
        { active: true, id: 'plain', loaded: true, volume: 0.5 }
      ])
    })

    const button = await screen.findByRole('button', { name: /save/i })
    await userEvent.click(button)

    const input = await screen.findByRole('textbox')
    fireEvent.change(input, { target: { value: 'My Combo' } })

    act(() => {
      bulkUpdate([
        { active: false, id: 'rain', loaded: true, volume: 1 },
        { active: false, id: 'plain', loaded: true, volume: 0.5 }
      ])
    })

    await userEvent.click(button)

    expect(input).toBeInTheDocument()
  })
})
