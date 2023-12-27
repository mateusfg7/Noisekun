import { useThemeStore } from '~/stores/theme-store'
import { logo } from './styles'

export function Logo() {
  const theme = useThemeStore(set => set.theme)

  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect
        width="800"
        height="800"
        rx="196"
        fill="currentColor"
        className={logo.rect({ theme })}
      />
      <path
        d="M213 656V297.215C213 248.844 274.843 228.663 303.375 267.722L496.625 532.278C525.157 571.337 587 551.156 587 502.785V144"
        stroke="currentColor"
        strokeWidth="130"
        strokeLinecap="round"
        className={logo.path({ theme })}
      />
    </svg>
  )
}
