import { create } from 'zustand'

export type Theme =
  | 'transition-theme'
  | 'dark-theme'
  | 'light-theme'
  | 'room-theme'
  | 'train-theme'
  | 'waterfall-theme'
  | 'camping-theme'

type States = { theme: Theme }
type Actions = { setTheme: (newTheme: Theme) => void }

export type ThemeStoreProps = States & Actions

export const useThemeStore = create<ThemeStoreProps>(set => ({
  theme: 'transition-theme',
  setTheme: newTheme => set(() => ({ theme: newTheme }))
}))
