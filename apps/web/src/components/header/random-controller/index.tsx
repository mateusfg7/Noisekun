import { useEffect, useRef } from "react";
import { FiZap } from "react-icons/fi";

import { useGlobalRandomModeStore } from "~/stores/random-mode-store";
import {
  type SoundState,
  useSoundsStateStore,
} from "~/stores/sounds-state-store";

import { calculateVolumeSteps } from "./calculate-volume-steps";

export function RandomModeButton() {
  const {
    randomMode,
    updateSteps,
    updateIntervalInMs,
    updateTransitionTimeInMs,
    setRandomMode,
  } = useGlobalRandomModeStore();
  const { sounds, setSound } = useSoundsStateStore();

  const soundsRef = useRef(sounds);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    soundsRef.current = sounds;
  }, [sounds]);

  function clearAllTimeouts() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }

  function clearRandomInterval() {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }

  // Apply Volumes with Timeouts
  function applyVolumeChanges(stepDuration: number) {
    clearAllTimeouts(); // Clears existing timeouts

    soundsRef.current
      .filter((sound) => sound.active)
      .forEach((initialSound) => {
        const targetVolume = Math.random();
        const volumeSteps = calculateVolumeSteps(
          initialSound.volume,
          targetVolume,
          updateSteps
        );

        const setVolumeStep = (sound: SoundState, index: number) => {
          if (index < volumeSteps.length) {
            // Fetch the most recent value of the sound
            const currentSound = soundsRef.current.find(
              (s) => s.id === sound.id
            );
            if (currentSound?.active) {
              const updatedVolume = volumeSteps[index];
              const updatedSound = { ...currentSound, volume: updatedVolume };
              setSound(updatedSound);
              // add next timeout only if this one is successful
              const timeoutId = setTimeout(() => {
                setVolumeStep(currentSound, index + 1);
              }, stepDuration);

              timeoutsRef.current.push(timeoutId);
            }
          }
        };

        setVolumeStep(initialSound, 0);
      });
  }

  function randomizeVolumes() {
    // Total duration for volume change
    const stepDuration = updateTransitionTimeInMs / updateSteps;
    applyVolumeChanges(stepDuration);
  }

  useEffect(() => {
    if (randomMode) {
      intervalIdRef.current = setInterval(randomizeVolumes, updateIntervalInMs);
    } else {
      clearRandomInterval();
      clearAllTimeouts();
    }

    return () => {
      clearRandomInterval();
      clearAllTimeouts();
    };
  }, [randomMode, updateIntervalInMs]);

  return (
    <div className="flex items-center gap-3 opacity-90 hover:opacity-100">
      <button
        className="text-primary-foreground opacity-50 hover:opacity-80 data-[enabled='true']:opacity-100"
        data-enabled={randomMode}
        data-umami-event="Enable/Disable Random Mode"
        onClick={() => setRandomMode(!randomMode)}
        title={randomMode ? "Disable random mode" : "Enable random mode"}
      >
        <FiZap size={22} />
      </button>
    </div>
  );
}
