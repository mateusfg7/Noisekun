import React, { useEffect, useRef, useState } from 'react'

import { useGlobalVolumeStore } from '@/stores/global-volume-store'

import type { Sound } from '@/sounds'
import { useThemeStore } from '@/stores/theme-store'
import { VolumeController } from './volume-controller'
import { fadeSound } from './fade-sound'
import { icon, iconContainer } from './styles'

interface SoundButtonProps {
  sound: Sound
}

export const SoundButton: React.FC<SoundButtonProps> = ({ sound }) => {
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  const [soundIsActive, setSoundIsActive] = useState(false)
  const [isUpdatingSoundState, setIsUpdatingSoundState] = useState(false)

  const [localSoundVolume, setLocalSoundVolume] = useState(1)

  const theme = useThemeStore(set => set.theme)

  const soundRef = useRef<HTMLAudioElement>()

  async function toggleSoundState() {
    if (!isUpdatingSoundState) return

    const currSoundVolume = localSoundVolume * globalVolume
    if (soundIsActive) {
      fadeSound({
        soundRef,
        from: currSoundVolume,
        to: 0,
        totalFadeTimeMs: 200,
        beforeFade() {
          setSoundIsActive(false)
        },
        afterFade() {
          soundRef.current.pause()
          setIsUpdatingSoundState(false)
        }
      })
    } else {
      fadeSound({
        soundRef,
        from: 0,
        to: currSoundVolume,
        totalFadeTimeMs: 200,
        beforeFade() {
          setSoundIsActive(true)
          soundRef.current.play()
        },
        afterFade() {
          setIsUpdatingSoundState(false)
        }
      })
    }
  }

  function handleLocalSoundVolume(volume: number) {
    setLocalSoundVolume(volume)
    localStorage.setItem(`${sound.id}-volume`, String(localSoundVolume))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(`${sound.id}-volume`)
      if (storageValue) setLocalSoundVolume(JSON.parse(storageValue))
      else {
        localStorage.setItem(`${sound.id}-volume`, String(localSoundVolume))
      }
    }
  }, [])

  useEffect(() => {
    if (!isUpdatingSoundState) {
      soundRef.current.volume = localSoundVolume * globalVolume
    }
  }, [globalVolume, localSoundVolume])

  useEffect(() => {
    if (!isUpdatingSoundState) return
    toggleSoundState()
  }, [isUpdatingSoundState])

  const Icon = sound.icon

  return (
    <div
      title={sound.title}
      className="flex h-24 w-24 flex-col items-center justify-center"
    >
      <audio ref={soundRef} preload="auto" loop>
        <source src={sound.file.url} type={sound.file.type} />
      </audio>
      <div
        className={iconContainer({ active: soundIsActive, theme })}
        onClick={() => setIsUpdatingSoundState(true)}
      >
        <Icon className={icon()} />
      </div>
      <VolumeController
        isActive={soundIsActive}
        soundName={sound.title}
        soundNameOnLocalStorage={sound.id}
        handleSoundVolume={handleLocalSoundVolume}
      />
    </div>
  )
}
