import { fireEvent, render, screen } from '@testing-library/react'
import { ConfigModal, ConfigModalProps } from './config-modal'
import userEvent from '@testing-library/user-event'

describe('Pomodoro Config', () => {
  const props: ConfigModalProps = {
    displayMinutes: '25',
    displaySeconds: '00',
    isLoading: false,
    minutes: '25',
    setMinutes: minutes => {}
  }

  it('should render without errors', async () => {
    render(<ConfigModal {...props} />)

    expect(
      await screen.findByTestId('pomodoro-timer-button')
    ).toBeInTheDocument()
  })

  it('should open modal', async () => {
    render(<ConfigModal {...props} />)

    const triggerButton = await screen.findByTestId('pomodoro-timer-button')

    await userEvent.click(triggerButton)

    expect(await screen.findByTestId('config-modal')).toBeInTheDocument()
  })

  it('render input with passed value on props', async () => {
    render(<ConfigModal {...props} />)

    const triggerButton = await screen.findByTestId('pomodoro-timer-button')

    await userEvent.click(triggerButton)

    const input = await screen.findByTestId('minutes-input')

    expect(input).toHaveDisplayValue(props.minutes)
  })
  it('save config', async () => {
    render(<ConfigModal {...props} />)

    const triggerButton = await screen.findByTestId('pomodoro-timer-button')

    await userEvent.click(triggerButton)

    const input = await screen.findByTestId('minutes-input')
    const saveButton = await screen.findByRole('button', { name: 'Save' })
    const modal = await screen.findByTestId('config-modal')

    fireEvent.change(input, { target: { value: 10 } })

    await userEvent.click(saveButton)

    expect(modal).not.toBeInTheDocument()
  })
  it('reset config', async () => {
    render(<ConfigModal {...props} />)

    const triggerButton = await screen.findByTestId('pomodoro-timer-button')

    await userEvent.click(triggerButton)

    const input = await screen.findByTestId('minutes-input')
    const resetButton = await screen.findByRole('button', { name: 'Reset' })

    fireEvent.change(input, { target: { value: 10 } })

    expect(input).toHaveDisplayValue('10')

    await userEvent.click(resetButton)

    expect(input).toHaveDisplayValue('25')
  })
})
