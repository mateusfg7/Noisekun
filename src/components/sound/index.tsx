import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { useGlobalVolumeStore } from '@/stores/GlobalVolumeStore'

import { VolumeController } from './volume-controller'
import { icon } from './styles'

export interface ISound {
  id: string
  title: string
  icon: string
  file: {
    url: string
    type: string
  }
}

interface SoundProps {
  soundData: ISound
}

export const Sound: React.FC<SoundProps> = ({ soundData }) => {
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  const [soundIsActive, setSoundIsActive] = useState(false)
  const [localSoundVolume, setLocalSoundVolume] = useState(1)

  const soundRef = useRef<HTMLAudioElement>()

  function toggleSoundState() {
    if (soundIsActive) soundRef.current.pause()
    else soundRef.current.play()

    setSoundIsActive(!soundIsActive)
  }

  function handleLocalSoundVolume(volume: number) {
    setLocalSoundVolume(volume)
    localStorage.setItem(`${soundData.id}-volume`, String(localSoundVolume))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(`${soundData.id}-volume`)
      if (storageValue) setLocalSoundVolume(JSON.parse(storageValue))
      else {
        localStorage.setItem(`${soundData.id}-volume`, String(localSoundVolume))
      }
    }
  }, [])

  useEffect(() => {
    soundRef.current.volume = localSoundVolume * globalVolume
  }, [globalVolume, localSoundVolume])

  return (
    <div
      title={soundData.title}
      className="flex flex-col justify-center items-center w-24 h-24"
    >
      <audio ref={soundRef} preload="auto" loop>
        <source src={soundData.file.url} type={soundData.file.type} />
      </audio>
      <div
        className={icon({ active: soundIsActive })}
        onClick={() => toggleSoundState()}
      >
        <Image
          src={`/assets/${soundData.icon}`}
          alt={soundData.title}
          width={80}
          height={80}
        />
      </div>
      <VolumeController
        isActive={soundIsActive}
        soundName={soundData.title}
        soundNameOnLocalStorage={soundData.id}
        handleSoundVolume={handleLocalSoundVolume}
      />
    </div>
  )
}
