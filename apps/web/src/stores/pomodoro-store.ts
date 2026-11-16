import { create } from "zustand";

export const PomodoroStatus = {
  idle: "idle",
  stopped: "stopped",
  ticking: "ticking",
} as const;

export type PomodoroStatusValue =
  (typeof PomodoroStatus)[keyof typeof PomodoroStatus];

type PomodoroStore = {
  pomodoroStatus: PomodoroStatusValue;
  setPomodoroStatus: (newStatus: PomodoroStatusValue) => void;
};

export const usePomodoroStore = create<PomodoroStore>((set) => ({
  pomodoroStatus: PomodoroStatus.idle,
  setPomodoroStatus: (newStatus) => set(() => ({ pomodoroStatus: newStatus })),
}));
