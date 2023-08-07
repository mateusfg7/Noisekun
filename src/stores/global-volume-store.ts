import { create } from 'zustand'

interface GlobalVolumeState {
  globalVolume: number
  setGlobalVolume: (newGlobalVolume: number) => void
}

export const useGlobalVolumeStore = create<GlobalVolumeState>(set => ({
  globalVolume: 1,
  setGlobalVolume: (newGlobalVolume: number) =>
    set(() => ({ globalVolume: newGlobalVolume }))
}))
