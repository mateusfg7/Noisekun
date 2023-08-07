import React, { useEffect, useRef, useState } from 'react'

import { useGlobalVolumeStore } from '@/stores/GlobalVolumeStore'

import { VolumeController } from './volume-controller'
import { icon, iconContainer } from './styles'
import { Sound } from '@/sounds'
import { useThemeStore } from '@/stores/BackgroundStore'

interface SoundButtonProps {
  sound: Sound
}

export const SoundButton: React.FC<SoundButtonProps> = ({ sound }) => {
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  const [soundIsActive, setSoundIsActive] = useState(false)
  const [localSoundVolume, setLocalSoundVolume] = useState(1)

  const theme = useThemeStore(set => set.theme)

  const soundRef = useRef<HTMLAudioElement>()

  function toggleSoundState() {
    if (soundIsActive) soundRef.current.pause()
    else soundRef.current.play()

    setSoundIsActive(!soundIsActive)
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
    soundRef.current.volume = localSoundVolume * globalVolume
  }, [globalVolume, localSoundVolume])

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
        onClick={() => toggleSoundState()}
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
