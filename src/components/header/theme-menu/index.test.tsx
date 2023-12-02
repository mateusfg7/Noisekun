import { render, screen } from '@testing-library/react'
import { ThemeMenu } from '.'
import userEvent from '@testing-library/user-event'
import { themeList } from './theme-list'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    replace: jest.fn()
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn()
  })),
  usePathname: jest.fn()
}))

describe('Theme Menu', () => {
  it('should render correctly', () => {
    render(<ThemeMenu />)

    expect(screen.getByTitle('Toggle theme menu')).toBeInTheDocument()
  })

  it('should open theme menu', async () => {
    render(<ThemeMenu />)

    const toggleMenuButton = screen.getByTitle('Toggle theme menu')

    await userEvent.click(toggleMenuButton)

    expect(screen.getByTestId('theme-menu-container')).toBeInTheDocument()
  })

  it('should list available themes', async () => {
    render(<ThemeMenu />)

    await userEvent.click(screen.getByTitle('Toggle theme menu'))

    themeList.forEach(theme => {
      expect(
        screen.getByRole('menuitem', { name: theme.title })
      ).toBeInTheDocument()
    })
  })

  it('should change theme', async () => {
    render(<ThemeMenu />)

    jest.spyOn(Storage.prototype, 'setItem')

    await userEvent.click(screen.getByTitle('Toggle theme menu'))
    await userEvent.click(
      screen.getByRole('menuitem', { name: themeList[0].title })
    )

    expect(localStorage.setItem).toHaveBeenCalled()
  })
})
