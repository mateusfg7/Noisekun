import { create } from 'zustand'

type Props = {
  userHasInteracted: boolean
  setUserHasInteracted: (value: boolean) => void
}

export const useUserInteractionStore = create<Props>(set => ({
  userHasInteracted: false,
  setUserHasInteracted: value => set({ userHasInteracted: value })
}))
