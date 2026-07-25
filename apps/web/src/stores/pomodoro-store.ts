import { create } from "zustand";

export const PomodoroStatus = {
  idle: "idle",
  stopped: "stopped",
  ticking: "ticking",
} as const;

export type PomodoroStatus =
  (typeof PomodoroStatus)[keyof typeof PomodoroStatus];

type PomodoroStore = {
  pomodoroStatus: PomodoroStatus;
  setPomodoroStatus: (newStatus: PomodoroStatus) => void;
};

export const usePomodoroStore = create<PomodoroStore>((set) => ({
  pomodoroStatus: PomodoroStatus.idle,
  setPomodoroStatus: (newStatus) => set(() => ({ pomodoroStatus: newStatus })),
}));
