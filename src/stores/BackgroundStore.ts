import create from 'zustand'

type Background =
  | 'animated'
  | 'dark'
  | 'lofi-rain'
  | 'train-rain'
  | 'tree'
  | 'disabled'

interface BackgroundStore {
  background: Background
  setBackground: (newBackground: Background) => void
}

export const useBackgroundStore = create<BackgroundStore>(set => ({
  background: 'disabled',
  setBackground: newBackground => set(() => ({ background: newBackground }))
}))
