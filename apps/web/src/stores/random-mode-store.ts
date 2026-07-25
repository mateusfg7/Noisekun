import { create } from "zustand";

type States = {
  randomMode: boolean;
  updateIntervalInMs: number;
  updateTransitionTimeInMs: number;
  updateSteps: number;
};

type Actions = {
  setRandomMode: (randomMode: boolean) => void;
  setUpdateInterval: (updateIntervalInMs: number) => void;
  setUpdateTransitionTime: (updateTransitionTimeInMs: number) => void;
  setUpdateSteps: (updateSteps: number) => void;
};

type GlobalRandomModeStoreProps = States & Actions;

export const useGlobalRandomModeStore = create<GlobalRandomModeStoreProps>(
  (set) => ({
    randomMode: false,
    setRandomMode: (randomMode) => set(() => ({ randomMode })),
    setUpdateInterval: (updateIntervalInMs) =>
      set(() => ({ updateIntervalInMs })),
    setUpdateSteps: (updateSteps) => set(() => ({ updateSteps })),
    setUpdateTransitionTime: (updateTransitionTimeInMs) =>
      set(() => ({ updateTransitionTimeInMs })),

    updateIntervalInMs: 10 * 1000, // 10 seconds

    updateSteps: 5, // Sound moves from 1 state to another in 5 steps

    updateTransitionTimeInMs: 5000, // 5 seconds
  })
);
