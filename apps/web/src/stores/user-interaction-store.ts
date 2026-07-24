import { create } from 'zustand'

type States = {
  userHasInteracted: boolean
}

type Actions = {
  setUserHasInteracted: (value: boolean) => void
}

export type UserInteractionStoreProps = States & Actions

export const useUserInteractionStore = create<UserInteractionStoreProps>(
  set => ({
    userHasInteracted: false,
    setUserHasInteracted: value => set({ userHasInteracted: value })
  })
)
