import { create } from 'zustand'
import { SoundState } from './sounds-state-store'
import { persist } from 'zustand/middleware'
import { Theme } from './theme-store'

export type Combo = {
  id: string
  name: string
  theme: Theme
  sounds: SoundState[]
}

type States = {
  combos: Combo[]
}

type Actions = {
  saveCombo: (combo: Combo) => void
  deleteCombo: (id: string) => void
}

type ComboStoreProps = States & Actions

export const useComboStore = create<ComboStoreProps>()(
  persist(
    (set, get) => ({
      combos: [],
      saveCombo(combo) {
        const combos = get().combos
        set({ combos: [...combos, combo] })
      },
      deleteCombo(id) {
        const combos = get().combos.filter(combo => combo.id !== id)
        set({ combos })
      }
    }),
    { name: 'combo-store', version: 1 }
  )
)
