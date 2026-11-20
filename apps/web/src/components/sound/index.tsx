import type React from "react";
import { useRef, useState } from "react";
import { useDeepCompareEffect, useMount } from "react-use";

import type { Sound } from "~/data/sounds";
import { useFadedPlayback } from "~/hooks/use-faded-playback";
import { useQueryState } from "~/hooks/use-query-state";
import { useGlobalVolumeStore } from "~/stores/global-volume-store";
import { PomodoroStatus, usePomodoroStore } from "~/stores/pomodoro-store";
import { useSoundsStateStore } from "~/stores/sounds-state-store";
import type { SoundState } from "~/stores/sounds-state-store";
import { useUserInteractionStore } from "~/stores/user-interaction-store";

import { VolumeController } from "./volume-controller";

type SoundButtonProps = {
  sound: Sound;
};

export const SoundButton: React.FC<SoundButtonProps> = ({ sound }) => {
  const globalVolume = useGlobalVolumeStore((state) => state.globalVolume);
  const pomodoroStatus = usePomodoroStore((state) => state.pomodoroStatus);
  const soundsStore = useSoundsStateStore((state) => state.sounds);
  const getSoundState = useSoundsStateStore((state) => state.getSound);
  const setSoundState = useSoundsStateStore((state) => state.setSound);

  const userHasInteracted = useUserInteractionStore(
    (state) => state.userHasInteracted
  );

  const [querySounds, setQuerySounds] = useQueryState("sounds");

  const [localSoundState, setLocalSoundState] = useState<SoundState>({
    active: false,
    id: sound.id,
    loaded: false,
    volume: 1,
  });

  const soundRef = useRef<HTMLAudioElement>(null);

  const storedSound = useSoundsStateStore((state) =>
    state.sounds.find((item) => item.id === sound.id)
  );

  useFadedPlayback(soundRef, {
    // Mute active sounds while the pomodoro is paused.
    muted: pomodoroStatus === PomodoroStatus.stopped,
    shouldPlay: userHasInteracted && Boolean(storedSound?.active),
    volume: (storedSound?.volume ?? 1) * globalVolume,
  });

  // Seed this sound's state once on load, from the persisted store and the
  // shared-link query (`?sounds=id,volume;...`), which wins when present.
  useMount(() => {
    const soundState = getSoundState(sound.id);

    let initialState = {
      active: false,
      id: sound.id,
      loaded: false,
      volume: 1,
    };

    if (soundState) {
      initialState = {
        ...soundState,
        active: false,
        loaded: false,
      };
    }

    if (querySounds.length) {
      for (const item of decodeURIComponent(querySounds).split(";")) {
        const [id, volume] = item.split(",");

        if (id === sound.id) {
          initialState = {
            active: true,
            id,
            loaded: false,
            volume: Number(volume),
          };
        }
      }
    }

    setSoundState(initialState);
    setLocalSoundState(initialState);
    soundRef.current?.load();
  });

  const mountQueryParams = () => {
    const activeSounds = soundsStore
      .flatMap((item) => (item.active ? [`${item.id},${item.volume}`] : []))
      .join(";");

    setQuerySounds(activeSounds);
  };

  // https://github.com/mateusfg7/Noisekun/issues/608#issuecomment-1874096664
  useDeepCompareEffect(() => {
    const soundState = getSoundState(sound.id);

    if (!(soundState && localSoundState)) {
      return;
    }

    setLocalSoundState(soundState);
    mountQueryParams();
  }, [soundsStore, userHasInteracted]);

  const Icon = sound.icon;

  return (
    <div
      className="flex h-24 w-24 flex-col items-center justify-center"
      title={sound.title}
    >
      <audio
        loop
        onCanPlay={() => setSoundState({ ...localSoundState, loaded: true })}
        preload="auto"
        ref={soundRef}
      >
        <source src={sound.file.url} type={sound.file.type} />
        <track kind="captions" />
      </audio>
      <button
        aria-label={sound.title}
        className="flex h-24 w-24 cursor-wait items-center justify-center rounded-xl text-primary-foreground/90 opacity-70 transition duration-300 disabled:hover:bg-transparent data-[loaded='false']:animate-loading data-[loaded='true']:cursor-pointer data-[active='true']:rounded-b-none data-[active='true']:opacity-100 md:hover:bg-primary-foreground/10 data-[active='true']:md:bg-primary-foreground/10 data-[active='true']:md:shadow-sound data-[loaded='true']:md:hover:opacity-100 data-[loaded='true']:md:hover:shadow-sound"
        data-active={
          localSoundState.active && localSoundState.loaded && userHasInteracted
        }
        // data-loaded={localSoundState.loaded}
        data-loaded={true}
        data-umami-event={sound.title}
        disabled={!localSoundState.loaded}
        onClick={() =>
          setSoundState({ ...localSoundState, active: !localSoundState.active })
        }
        type="button"
      >
        <Icon className="h-20 w-20" />
      </button>
      <VolumeController
        handleSoundVolume={(volume) => {
          setSoundState({ ...localSoundState, volume });
        }}
        isActive={
          localSoundState.active && localSoundState.loaded && userHasInteracted
        }
        soundId={sound.id}
        soundName={sound.title}
      />
    </div>
  );
};
