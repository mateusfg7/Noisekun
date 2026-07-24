import { create } from 'zustand'

type States = {
  globalVolume: number
}

type Actions = {
  setGlobalVolume: (newGlobalVolume: number) => void
  resetStore: () => void
}

export type GlobalVolumeStoreProps = States & Actions

export const useGlobalVolumeStore = create<GlobalVolumeStoreProps>(set => ({
  globalVolume: 1,
  setGlobalVolume: (newGlobalVolume: number) =>
    set(() => ({ globalVolume: newGlobalVolume })),
  resetStore: () => set(() => ({ globalVolume: 1 }))
}))
