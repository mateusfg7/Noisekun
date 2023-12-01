import React, { useEffect, useRef } from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi'

import { useThemeStore } from '@/stores/theme-store'
import { controllerButton } from './styles'
import { useGlobalRandomModeStore } from '@/stores/random-mode-store'
import { useSoundsStateStore } from '@/stores/sounds-state-store'

export function RandomModeButton() {
    const updateInterval = 2000 // 2 seconds
  
    const { randomMode, setRandomMode } = useGlobalRandomModeStore()
    const { sounds, setSound } = useSoundsStateStore()
    const theme = useThemeStore(set => set.theme)
    const soundsRef = useRef(sounds)
    const intervalIdRef = useRef(null)
  
    useEffect(() => {
      soundsRef.current = sounds
    }, [sounds])
  
    function randomizeVolumes() {
      soundsRef.current
        .filter(sound => sound.active)
        .forEach(sound => {
          const targetVolume = Math.random()
          const timeoutId = setTimeout(() => {
            const updatedSound = { ...sound, volume: targetVolume }
            setSound(updatedSound)
          }, updateInterval)
          intervalIdRef.current = timeoutId
        })
    }
  
    useEffect(() => {
      if (randomMode) {
        intervalIdRef.current = setInterval(randomizeVolumes, updateInterval)
      } else {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = null
      }
  
      return () => {
        clearInterval(intervalIdRef.current)
      }
    }, [randomMode, updateInterval])
  
    return (
      <button
        title="Enable/Disable Random Mode"
        className={controllerButton({ theme })}
        onClick={() => setRandomMode(!randomMode)}
        data-umami-event="Enable/Disable Random Mode"
      >
        {randomMode ? <FiZapOff size={25} /> : <FiZap size={25} />}
      </button>
    )
  }