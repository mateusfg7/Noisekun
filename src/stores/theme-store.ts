import { create } from 'zustand'

export type Theme =
  | 'transition'
  | 'dark'
  | 'light'
  | 'blue-room'
  | 'train'
  | 'waterfall'
  | 'camping-fire'

type States = { theme: Theme }
type Actions = { setTheme: (newTheme: Theme) => void }

export type ThemeStoreProps = States & Actions

export const useThemeStore = create<ThemeStoreProps>(set => ({
  theme: 'transition',
  setTheme: newTheme => set(() => ({ theme: newTheme }))
}))
