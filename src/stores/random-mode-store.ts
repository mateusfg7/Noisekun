import { create } from 'zustand'

interface GlobalRandomModeState {
  randomMode: boolean
  setRandomMode: (newRandomMode: boolean) => void
}

export const useGlobalRandomModeStore = create<GlobalRandomModeState>(set => ({
  randomMode: false,
  setRandomMode: (newRandomMode: boolean) =>
    set(() => ({ randomMode: newRandomMode }))
}))
