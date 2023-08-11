import { create } from 'zustand'

export enum PomodoroStatus {
  idle = 'idle',
  ticking = 'ticking',
  stopped = 'stopped'
}

interface PomodoroStore {
  pomodoroStatus: PomodoroStatus
  setPomodoroStatus: (newStatus: PomodoroStatus) => void
}

export const usePomodoroStore = create<PomodoroStore>(set => ({
  pomodoroStatus: PomodoroStatus.idle,
  setPomodoroStatus: newStatus => set(() => ({ pomodoroStatus: newStatus }))
}))
