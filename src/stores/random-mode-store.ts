import { create } from 'zustand'

type States = {
  randomMode: boolean
  updateIntervalInMs: number
  updateSteps: number
}

type Actions = {
  setRandomMode: (randomMode: boolean) => void
  setUpdateInterval: (updateIntervalInMs: number) => void
  setUpdateSteps: (updateSteps: number) => void
}

type GlobalRandomModeStoreProps = States & Actions

export const useGlobalRandomModeStore = create<GlobalRandomModeStoreProps>(
  set => ({
    randomMode: false,
    setRandomMode: randomMode => set(() => ({ randomMode })),

    updateIntervalInMs: 10 * 1000, // 10 seconds
    setUpdateInterval: updateIntervalInMs =>
      set(() => ({ updateIntervalInMs })),

    updateSteps: 5, // Sound moves from 1 state to another in 5 steps
    setUpdateSteps: updateSteps => set(() => ({ updateSteps }))
  })
)
