import { render, screen, fireEvent } from '@testing-library/react'
import { Combo, useComboStore } from '~/stores/combo-store'
import { ComboList } from '.'

jest.mock('../../../stores/combo-store')

const mockEmptyComboList = () => {
  ;(useComboStore as unknown as jest.Mock).mockImplementation(
    () => [] as Combo[]
  )
}

const mockPopulatedComboList = () => {
  ;(useComboStore as unknown as jest.Mock).mockImplementation(
    () =>
      [
        {
          id: 'd90d230j',
          name: 'My Combo',
          theme: 'dark',
          sounds: [{ active: true, id: 'd9b38dh', loaded: true, volume: 1 }]
        }
      ] as Combo[]
  )
}

describe('Combo List', () => {
  it('should render correctly', () => {
    mockEmptyComboList()

    render(<ComboList />)

    const element = screen.getByTestId('combo-list')

    expect(element).toBeInTheDocument()
  })

  it('should render trigger button', () => {
    mockEmptyComboList()

    render(<ComboList />)

    const triggerButton = screen.getByTitle('Toggle combo list')

    expect(triggerButton).toBeInTheDocument()
  })

  it('trigger button should be disabled', () => {
    mockEmptyComboList()

    render(<ComboList />)

    const triggerButton = screen.getByTitle('Toggle combo list')

    expect(triggerButton.getAttribute('disabled')).not.toBeNull()
  })

  it('trigger button should not be disabled', () => {
    mockPopulatedComboList()

    render(<ComboList />)

    const triggerButton = screen.getByTitle('Toggle combo list')

    expect(triggerButton.getAttribute('disabled')).toBeNull()
  })

  it('modal should be opened', async () => {
    mockPopulatedComboList()
    render(<ComboList />)

    const triggerButton = screen.getByTitle('Toggle combo list')

    fireEvent.click(triggerButton)

    const modal = await screen.findByTestId('combo-list-modal')

    expect(modal).toBeInTheDocument()
  })

  it('combo button should be rendered', async () => {
    mockPopulatedComboList()
    render(<ComboList />)

    fireEvent.click(screen.getByTitle('Toggle combo list'))

    const comboButton = await screen.findByText('My Combo')

    expect(comboButton).toBeInTheDocument()
  })
})
