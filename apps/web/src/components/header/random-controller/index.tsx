import { useEffect, useRef } from "react";
import { FiZap } from "react-icons/fi";

import { headerIconButton } from "~/components/header/styles";
import { useGlobalRandomModeStore } from "~/stores/random-mode-store";
import { useSoundsStateStore } from "~/stores/sounds-state-store";

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

  useEffect(() => {
    function clearAllTimeouts() {
      for (const timeoutId of timeoutsRef.current) {
        clearTimeout(timeoutId);
      }

      timeoutsRef.current = [];
    }

    function clearRandomInterval() {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    }

    function setVolumeStep(
      soundId: string,
      volumeSteps: number[],
      index: number,
      stepDuration: number
    ) {
      if (index >= volumeSteps.length) {
        return;
      }

      // Fetch the most recent value of the sound
      const currentSound = soundsRef.current.find((s) => s.id === soundId);

      if (!currentSound?.active) {
        return;
      }

      setSound({ ...currentSound, volume: volumeSteps[index] });

      // add next timeout only if this one is successful
      const timeoutId = setTimeout(() => {
        setVolumeStep(soundId, volumeSteps, index + 1, stepDuration);
      }, stepDuration);

      timeoutsRef.current.push(timeoutId);
    }

    // Apply Volumes with Timeouts
    function applyVolumeChanges(stepDuration: number) {
      clearAllTimeouts(); // Clears existing timeouts

      const activeSounds = soundsRef.current.filter((sound) => sound.active);

      for (const initialSound of activeSounds) {
        const targetVolume = Math.random();

        const volumeSteps = calculateVolumeSteps(
          initialSound.volume,
          targetVolume,
          updateSteps
        );

        setVolumeStep(initialSound.id, volumeSteps, 0, stepDuration);
      }
    }

    function randomizeVolumes() {
      // Total duration for volume change
      const stepDuration = updateTransitionTimeInMs / updateSteps;
      applyVolumeChanges(stepDuration);
    }

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
  }, [
    randomMode,
    setSound,
    updateIntervalInMs,
    updateSteps,
    updateTransitionTimeInMs,
  ]);

  return (
    <div className="flex items-center">
      <button
        className={headerIconButton({
          className:
            /*tw:*/ "data-[enabled='false']:text-primary-foreground/50",
        })}
        data-enabled={randomMode}
        data-umami-event="Enable/Disable Random Mode"
        onClick={() => setRandomMode(!randomMode)}
        title={randomMode ? "Disable random mode" : "Enable random mode"}
        type="button"
      >
        <FiZap size={18} />
      </button>
    </div>
  );
}
