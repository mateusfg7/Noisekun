import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SoundState } from "./sounds-state-store";
import type { Theme } from "./theme-store";

export type Combo = {
  id: string;
  name: string;
  theme: Theme;
  sounds: SoundState[];
};

type States = {
  combos: Combo[];
};

type Actions = {
  saveCombo: (combo: Combo) => void;
  deleteCombo: (id: string) => void;
};

type ComboStoreProps = States & Actions;

export const useComboStore = create<ComboStoreProps>()(
  persist(
    (set, get) => ({
      combos: [],
      deleteCombo(id) {
        const combos = get().combos.filter((combo) => combo.id !== id);
        set({ combos });
      },
      saveCombo(combo) {
        const combos = get().combos;
        set({ combos: [...combos, combo] });
      },
    }),
    { name: "combo-store", version: 1 }
  )
);
