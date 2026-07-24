import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SoundState = {
  id: string;
  active: boolean;
  volume: number;
  loaded: boolean;
};

type States = {
  sounds: SoundState[];
};
type Actions = {
  getSound: (id: string) => undefined | SoundState;
  setSound: (newState: SoundState) => void;
  bulkUpdate: (soundsStates: SoundState[]) => void;
};

export type SoundsStateStoreProps = States & Actions;

export const useSoundsStateStore = create<SoundsStateStoreProps>()(
  persist(
    (set, get) => ({
      bulkUpdate(newStates) {
        set({ sounds: newStates });
      },
      getSound(id) {
        const sound = get().sounds.filter((sound) => sound.id === id);

        if (sound.length > 0) {
          return sound[0];
        }
      },
      setSound(newState) {
        const sounds = get().sounds.filter((sound) => sound.id !== newState.id);
        set({ sounds: [...sounds, newState] });
      },
      sounds: [] as SoundState[],
    }),
    { name: "sounds-store" }
  )
);
