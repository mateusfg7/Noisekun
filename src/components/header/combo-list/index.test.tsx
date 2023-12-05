import { render, screen, renderHook, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Combo, useComboStore } from '~/stores/combo-store'
import { useSoundsStateStore } from '~/stores/sounds-state-store'
import { ComboList } from '.'

const exampleCombo: Combo = {
  id: 'd90d230j',
  name: 'My Combo',
  theme: 'dark',
  sounds: [{ active: true, id: 'rain', loaded: true, volume: 1 }]
}

const populateComboList = () => {
  const { result } = renderHook(() => useComboStore())

  act(() => {
    result.current.saveCombo(exampleCombo)
  })
}

describe('Combo List', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useSoundsStateStore())

    // Reset the state
    act(() => {
      result.current.sounds = []
    })
  })

  it('should render correctly', () => {
    render(<ComboList />)

    expect(screen.getByTestId('combo-list')).toBeInTheDocument()
  })

  it('should render trigger button', () => {
    render(<ComboList />)

    expect(screen.getByTitle('Toggle combo list')).toBeInTheDocument()
  })

  it('trigger button should be disabled', () => {
    render(<ComboList />)

    expect(screen.getByTitle('Toggle combo list')).toBeDisabled()
  })

  it('trigger button should be enabled', () => {
    render(<ComboList />)
    populateComboList()

    expect(screen.getByTitle('Toggle combo list')).toBeEnabled()
  })

  it('should open modal', async () => {
    render(<ComboList />)
    populateComboList()

    await userEvent.click(screen.getByTitle('Toggle combo list'))

    expect(screen.getByTestId('combo-list-modal')).toBeInTheDocument()
  })

  it('combo button should be rendered', async () => {
    render(<ComboList />)
    populateComboList()

    await userEvent.click(screen.getByTitle('Toggle combo list'))

    expect(screen.getByText('My Combo')).toBeInTheDocument()
  })

  it('should apply combo', async () => {
    const { result } = renderHook(() => useSoundsStateStore())

    render(<ComboList />)
    populateComboList()

    await userEvent.click(screen.getByTitle('Toggle combo list'))
    await userEvent.click(screen.getByText('My Combo'))

    expect(result.current.sounds.length).toBe(1)
  })

  it('should switch between select/delete mode', async () => {
    render(<ComboList />)
    populateComboList()

    await userEvent.click(screen.getByTitle('Toggle combo list'))

    await userEvent.click(screen.getByText('Delete'))
    expect(
      screen.getByTestId(`${exampleCombo.id}_delete_button`)
    ).toBeInTheDocument()

    await userEvent.click(screen.getByText('Select'))
    expect(screen.getByText('My Combo')).toBeInTheDocument()
  })

  it('should delete combo', async () => {
    const { result } = renderHook(() => useComboStore())

    render(<ComboList />)
    populateComboList()

    await userEvent.click(screen.getByTitle('Toggle combo list'))
    await userEvent.click(screen.getByText('Delete'))

    const comboDeleteButton = screen.getByTestId(
      `${exampleCombo.id}_delete_button`
    )

    expect(result.current.combos.length).toBe(1)

    await userEvent.click(comboDeleteButton)

    expect(result.current.combos.length).toBe(0)
  })
})
