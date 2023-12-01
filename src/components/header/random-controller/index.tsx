import React, { useEffect, useRef, useState } from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi'

import { useThemeStore } from '@/stores/theme-store'
import { volumeControllerInput as randomControllerInput } from '@/shared/styles/volume-controller-input'
import { soundButton } from './styles'
import { useGlobalRandomModeStore } from '@/stores/random-mode-store'
import { useSoundsStateStore } from '@/stores/sounds-state-store'

export function RandomModeButton() {
  const MIN_INTERVAL = 10 * 1000 // 10 seconds
  const MAX_INTERVAL = 5 * 60 * 1000 // 5 minutes

  const [updateInterval, setUpdateInterval] = useState(MAX_INTERVAL)

  const { randomMode, setRandomMode } = useGlobalRandomModeStore()
  const { sounds, setSound } = useSoundsStateStore()
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

  function randomizeVolumes() {
    const steps = 5
    const transitionDuration = 5000 // Total duration for volume change
    const stepDuration = transitionDuration / steps

    clearAllTimeouts()

    soundsRef.current
      .filter(sound => sound.active)
      .forEach(sound => {
        const currentVolume = sound.volume
        const targetVolume = Math.random()

        for (let i = 1; i <= steps; i++) {
          const timeoutId = setTimeout(() => {
            // Exponential interpolation factor (ease-out)
            const factor = 1 - Math.pow(1 - i / steps, 2)
            const newVolume =
              currentVolume + (targetVolume - currentVolume) * factor
            // Update the sound volume in a new object
            const updatedSound = { ...sound, volume: Math.min(newVolume, 1) }
            // Update the global state with the new sounds array
            setSound(updatedSound)
          }, i * stepDuration)

          timeoutsRef.current.push(timeoutId)
        }
      })
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
