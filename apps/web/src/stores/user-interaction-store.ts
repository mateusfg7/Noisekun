import { create } from "zustand";

type States = {
  userHasInteracted: boolean;
};

type Actions = {
  setUserHasInteracted: (value: boolean) => void;
};

export type UserInteractionStoreProps = States & Actions;

export const useUserInteractionStore = create<UserInteractionStoreProps>(
  (set) => ({
    setUserHasInteracted: (value) => set({ userHasInteracted: value }),
    userHasInteracted: false,
  })
);
