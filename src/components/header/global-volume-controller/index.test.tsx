import {
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useGlobalVolumeStore } from '~/stores/global-volume-store'
import { GlobalVolumeController } from '.'

describe('Global Volume Controller', () => {
  const {
    result: { current: resetStore }
  } = renderHook(() => useGlobalVolumeStore(store => store.resetStore))

  beforeEach(() => {
    resetStore()
  })

  it('should render correctly', () => {
    render(<GlobalVolumeController />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()

    cleanup()
  })

  it('should render range input', () => {
    render(<GlobalVolumeController />)

    const input = screen.getByRole('slider')

    expect(input).toBeInTheDocument()

    cleanup()
  })

  it('should toggle `isShowing` state when mouse enter/leave', async () => {
    render(<GlobalVolumeController />)

    const inputContainer = screen.getByRole('slider').parentElement

    expect(inputContainer.getAttribute('data-is-showing')).toBe('false')

    await userEvent.hover(inputContainer)
    expect(inputContainer.getAttribute('data-is-showing')).toBe('true')

    await userEvent.unhover(inputContainer)
    expect(inputContainer.getAttribute('data-is-showing')).toBe('false')

    cleanup()
  })

  it('should update volume percentage', async () => {
    render(<GlobalVolumeController />)

    const input = screen.getByRole('slider')
    fireEvent.change(input, { target: { value: 500 } })

    expect(input.title).toBe('Global volume in 50.0%')

    cleanup()
  })

  it('should mute/umute volume', async () => {
    render(<GlobalVolumeController />)

    const input = screen.getByRole('slider')
    const button = screen.getByRole('button')

    await userEvent.click(button)
    expect(input.title).toBe('Global volume in 0.0%')

    await userEvent.click(button)
    expect(input.title).toBe('Global volume in 100.0%')

    cleanup()
  })
})
