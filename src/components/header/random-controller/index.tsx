import React, { useEffect, useRef, useState } from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi'

import { useThemeStore } from '../../../stores/theme-store'
import { volumeControllerInput as randomControllerInput } from '../../../shared/styles/volume-controller-input'
import { soundButton } from './styles'
import { useGlobalRandomModeStore } from '../../../stores/random-mode-store'
import { useSoundsStateStore } from '../../../stores/sounds-state-store'

// Calculate Target Volumes and out for testing purposes
export const calculateVolumeSteps = (currentVolume, targetVolume, steps) => {
  let volumeSteps = []
  for (let i = 1; i <= steps; i++) {
    // Exponential interpolation factor (ease-out)
    const factor = 1 - Math.pow(1 - i / steps, 2)
    const newVolume = currentVolume + (targetVolume - currentVolume) * factor
    volumeSteps.push(Math.min(newVolume, 1))
  }
  return volumeSteps
}

export function RandomModeButton() {
  // How often the randomization takes place (min and max for the slider)
  const MIN_INTERVAL = 10 * 1000 // 10 seconds
  const MAX_INTERVAL = 5 * 60 * 1000 // 5 minutes
  const TOTAL_TRANSITION = 5000 // 5 seconds
  const NUM_STEPS = 5 // Sound moves from 1 state to another in 5 steps

  const { randomMode, setRandomMode } = useGlobalRandomModeStore()
  const { sounds, setSound } = useSoundsStateStore()
  const [updateInterval, setUpdateInterval] = useState(MAX_INTERVAL)
  const [isShowing, setIsShowing] = useState(false)

  const theme = useThemeStore(set => set.theme)

  const soundsRef = useRef(sounds)
  const intervalIdRef = useRef(null)
  const timeoutsRef = useRef([])

  useEffect(() => {
    soundsRef.current = sounds
  }, [sounds])

  function clearAllTimeouts() {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  // Apply Volumes with Timeouts
  function applyVolumeChanges(stepDuration) {
    clearAllTimeouts(); // Clears existing timeouts

    soundsRef.current.filter(sound => sound.active).forEach(initialSound => {
        const targetVolume = Math.random();
        const volumeSteps = calculateVolumeSteps(initialSound.volume, targetVolume, NUM_STEPS);

        const setVolumeStep = (sound, index) => {
            if (index < volumeSteps.length) {
                // Fetch the most recent value of the sound
                const currentSound = soundsRef.current.find(s => s.id === sound.id);
                if (currentSound && currentSound.active) {
                    const updatedVolume = volumeSteps[index];
                    const updatedSound = { ...currentSound, volume: updatedVolume };
                    setSound(updatedSound);
                    // add next timeout only if this one is successfull
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
    const stepDuration = TOTAL_TRANSITION / NUM_STEPS
    applyVolumeChanges(stepDuration)
  }

  useEffect(() => {
    if (randomMode) {
      intervalIdRef.current = setInterval(randomizeVolumes, updateInterval)
    } else {
      clearInterval(intervalIdRef.current)
      clearAllTimeouts()
      intervalIdRef.current = null
    }

    return () => {
      clearInterval(intervalIdRef.current)
      clearAllTimeouts()
    }
  }, [randomMode, updateInterval])

  const updateIntervalText = `Update interval: ${Math.round(
    updateInterval / 1000
  )} seconds`

  return (
    <div
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
      className="flex items-center gap-3 opacity-90 hover:opacity-100"
    >
      <div
        data-is-showing={isShowing && randomMode}
        className="group relative hidden h-max w-28 items-center data-[is-showing='true']:flex"
      >
        <span className="sr-only">{updateIntervalText}</span>
        <input
          className={randomControllerInput({ theme })}
          type="range"
          title={updateIntervalText}
          min={MIN_INTERVAL}
          max={MAX_INTERVAL}
          value={updateInterval}
          style={{
            backgroundSize: `${
              (100 * (updateInterval - MIN_INTERVAL)) /
              (MAX_INTERVAL - MIN_INTERVAL)
            }%`
          }}
          onChange={event => setUpdateInterval(Number(event.target.value))}
        />
      </div>
      <button
        title="Enable/Disable Random Mode"
        className={soundButton({ theme })}
        onClick={() => setRandomMode(!randomMode)}
        data-umami-event="Enable/Disable Random Mode"
      >
        {randomMode ? <FiZapOff size={25} /> : <FiZap size={25} />}
      </button>
    </div>
  )
}
