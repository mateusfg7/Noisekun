import { create } from 'zustand'

export type Theme =
  | 'transition'
  | 'dark'
  | 'light'
  | 'blue-room'
  | 'train'
  | 'waterfall'
  | 'camping-fire'

interface ThemeStore {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

export const useThemeStore = create<ThemeStore>(set => ({
  theme: 'transition',
  setTheme: newTheme => set(() => ({ theme: newTheme }))
}))
