import { create } from 'zustand'
import { SoundState } from './sounds-state-store'
import { persist } from 'zustand/middleware'

interface Combo {
  id: string
  name: string
  sounds: SoundState[]
}

interface Props {
  combos: Combo[]
  saveCombo: (combo: Combo) => void
  deleteCombo: (id: string) => void
}

export const useComboStore = create<Props>()(
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
