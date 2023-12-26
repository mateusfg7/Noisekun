import React, { useEffect, useRef } from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi'

import { useThemeStore } from '~/stores/theme-store'
import { useGlobalRandomModeStore } from '~/stores/random-mode-store'
import { useSoundsStateStore } from '~/stores/sounds-state-store'

import { soundButton } from './styles'

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
  const TOTAL_TRANSITION = 5000 // 5 seconds

  const { randomMode, updateSteps, updateIntervalInMs, setRandomMode } =
    useGlobalRandomModeStore()
  const { sounds, setSound } = useSoundsStateStore()

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
    clearAllTimeouts() // Clears existing timeouts

    soundsRef.current
      .filter(sound => sound.active)
      .forEach(initialSound => {
        const targetVolume = Math.random()
        const volumeSteps = calculateVolumeSteps(
          initialSound.volume,
          targetVolume,
          updateSteps
        )

        const setVolumeStep = (sound, index) => {
          if (index < volumeSteps.length) {
            // Fetch the most recent value of the sound
            const currentSound = soundsRef.current.find(s => s.id === sound.id)
            if (currentSound && currentSound.active) {
              const updatedVolume = volumeSteps[index]
              const updatedSound = { ...currentSound, volume: updatedVolume }
              setSound(updatedSound)
              // add next timeout only if this one is successfull
              const timeoutId = setTimeout(() => {
                setVolumeStep(currentSound, index + 1)
              }, stepDuration)

              timeoutsRef.current.push(timeoutId)
            }
          }
        }

        setVolumeStep(initialSound, 0)
      })
  }

  function randomizeVolumes() {
    // Total duration for volume change
    const stepDuration = TOTAL_TRANSITION / updateSteps
    applyVolumeChanges(stepDuration)
  }

  useEffect(() => {
    if (randomMode) {
      intervalIdRef.current = setInterval(randomizeVolumes, updateIntervalInMs)
    } else {
      clearInterval(intervalIdRef.current)
      clearAllTimeouts()
      intervalIdRef.current = null
    }

    return () => {
      clearInterval(intervalIdRef.current)
      clearAllTimeouts()
    }
  }, [randomMode, updateIntervalInMs])

  return (
    <div className="flex items-center gap-3 opacity-90 hover:opacity-100">
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
