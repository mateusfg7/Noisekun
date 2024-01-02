import {
  act,
  fireEvent,
  render,
  renderHook,
  screen
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PomodoroStatus, usePomodoroStore } from '~/stores/pomodoro-store'
import { Pomodoro } from '.'

describe('Pomodoro', () => {
  it('should render without errors', async () => {
    render(<Pomodoro />)

    const resetButton = await screen.findByRole('button', {
      name: 'Reset Pomodoro timer'
    })
    const display = await screen.findByTestId('pomodoro-timer')
    const toggleButton = await screen.findByRole('button', {
      name: 'Toggle Pomodoro timer'
    })

    expect(resetButton).toBeInTheDocument()
    expect(display).toBeInTheDocument()
    expect(toggleButton).toBeInTheDocument()

    expect(display.textContent).toBe('25:00')
  })

  it('should switch pomodoro status', async () => {
    const { result } = renderHook(() => usePomodoroStore())

    render(<Pomodoro />)

    const toggleButton = await screen.findByRole('button', {
      name: 'Toggle Pomodoro timer'
    })
    const resetButton = await screen.findByRole('button', {
      name: 'Reset Pomodoro timer'
    })

    // initial state
    expect(result.current.pomodoroStatus).toBe(PomodoroStatus.idle)

    // play pomodoro
    await userEvent.click(toggleButton)
    expect(result.current.pomodoroStatus).toBe(PomodoroStatus.ticking)

    // pause/stop pomodoro
    await userEvent.click(toggleButton)
    expect(result.current.pomodoroStatus).toBe(PomodoroStatus.stopped)

    // reset pomodoro
    await userEvent.click(resetButton)
    expect(result.current.pomodoroStatus).toBe(PomodoroStatus.idle)
  })

  it('should finish pomodoro and start alarm', async () => {
    window.HTMLAudioElement.prototype.play = () =>
      Promise.resolve(/* do nothing */)
    window.HTMLAudioElement.prototype.pause = () => {
      /* do nothing */
    }

    const playSpy = jest.spyOn(window.HTMLAudioElement.prototype, 'play')

    render(<Pomodoro />)

    const { result } = renderHook(() => usePomodoroStore())

    jest.useFakeTimers()

    const display = screen.getByTestId('pomodoro-timer')
    const toggleButton = screen.getByRole('button', {
      name: 'Toggle Pomodoro timer'
    })

    await userEvent.click(toggleButton, { delay: null })

    const duration = 25 * 60
    for (let index = 0; index < duration; index++) {
      act(() => {
        jest.runOnlyPendingTimers()
      })
    }

    expect(display.textContent).toBe('00:00')
    expect(playSpy).toHaveBeenCalled()
    expect(result.current.pomodoroStatus).toBe(PomodoroStatus.stopped)

    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })
  it('should reset finished pomodoro and stop alarm', async () => {
    window.HTMLAudioElement.prototype.play = () =>
      Promise.resolve(/* do nothing */)
    window.HTMLAudioElement.prototype.pause = () => {
      /* do nothing */
    }

    const pauseSpy = jest.spyOn(window.HTMLAudioElement.prototype, 'pause')

    render(<Pomodoro />)

    const { result } = renderHook(() => usePomodoroStore())

    jest.useFakeTimers()

    const display = screen.getByTestId('pomodoro-timer')
    const toggleButton = screen.getByRole('button', {
      name: 'Toggle Pomodoro timer'
    })
    const resetButton = await screen.findByRole('button', {
      name: 'Reset Pomodoro timer'
    })

    await userEvent.click(toggleButton, { delay: null })

    const duration = 25 * 60
    for (let index = 0; index < duration; index++) {
      act(() => {
        jest.runOnlyPendingTimers()
      })
    }

    await userEvent.click(resetButton, { delay: null })

    expect(display.textContent).toBe('25:00')
    expect(pauseSpy).toHaveBeenCalled()
    expect(result.current.pomodoroStatus).toBe(PomodoroStatus.idle)

    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })
  it('should stop alarm and restart timer', async () => {
    window.HTMLAudioElement.prototype.play = () =>
      Promise.resolve(/* do nothing */)
    window.HTMLAudioElement.prototype.pause = () => {
      /* do nothing */
    }

    const pauseSpy = jest.spyOn(window.HTMLAudioElement.prototype, 'pause')

    render(<Pomodoro />)

    const { result } = renderHook(() => usePomodoroStore())

    jest.useFakeTimers()

    const display = screen.getByTestId('pomodoro-timer')
    const toggleButton = screen.getByRole('button', {
      name: 'Toggle Pomodoro timer'
    })

    await userEvent.click(toggleButton, { delay: null })

    const durationInSec = 25 * 60 // 25 minutes
    for (let index = 0; index < durationInSec; index++) {
      act(() => {
        jest.runOnlyPendingTimers()
      })
    }

    await userEvent.click(toggleButton, { delay: null })

    act(() => {
      jest.runOnlyPendingTimers()
    })

    expect(display.textContent).toBe('24:59')
    expect(pauseSpy).toHaveBeenCalled()
    expect(result.current.pomodoroStatus).toBe(PomodoroStatus.ticking)

    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })

  it('should open pomodoro config', async () => {
    render(<Pomodoro />)

    const configTriggerButton = await screen.findByTestId(
      'pomodoro-timer-button'
    )

    await userEvent.click(configTriggerButton)

    expect(await screen.findByTestId('config-modal')).toBeInTheDocument()
  })
  it('should update default time', async () => {
    render(<Pomodoro />)

    const display = screen.getByTestId('pomodoro-timer')
    const configTriggerButton = await screen.findByTestId(
      'pomodoro-timer-button'
    )

    await userEvent.click(configTriggerButton)

    const configModal = await screen.findByTestId('config-modal')
    const input = await screen.findByTestId('minutes-input')
    const saveButton = await screen.findByRole('button', { name: 'Save' })

    expect(input).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 10 } })
    await userEvent.click(saveButton)

    expect(configModal).not.toBeInTheDocument()
    expect(display.textContent).toBe('10:00')
  })
  it('should update default time to max 99 min', async () => {
    render(<Pomodoro />)

    const display = screen.getByTestId('pomodoro-timer')
    const configTriggerButton = await screen.findByTestId(
      'pomodoro-timer-button'
    )

    await userEvent.click(configTriggerButton)

    const configModal = await screen.findByTestId('config-modal')
    const input = await screen.findByTestId('minutes-input')
    const saveButton = await screen.findByRole('button', { name: 'Save' })

    expect(input).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 100 } })
    await userEvent.click(saveButton)

    expect(configModal).not.toBeInTheDocument()
    expect(display.textContent).toBe('99:00')
  })
})
