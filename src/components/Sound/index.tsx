/* eslint-disable multiline-ternary */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { useGlobalVolumeStore } from '../../stores/GlobalVolumeStore'

import { VolumeController } from '../VolumeController'

export interface ISound {
  name: string
  iconFile: string
  audioFile: {
    name: string
    type: string
  }
}

export const Sound: React.FC<ISound> = ({ name, iconFile, audioFile }) => {
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  const [soundIsActive, setSoundIsActive] = useState(false)
  const [localSoundVolume, setLocalSoundVolume] = useState(1)

  const soundRef = useRef<HTMLAudioElement>()

  async function toggleSoundState() {
    if (soundIsActive) soundRef.current.pause()
    else soundRef.current.play()

    setSoundIsActive(!soundIsActive)
  }

  async function handleLocalSoundVolume(volume: number) {
    setLocalSoundVolume(volume)
    localStorage.setItem(`${name}-volume`, String(localSoundVolume))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(`${name}-volume`)
      if (storageValue) setLocalSoundVolume(JSON.parse(storageValue))
      else localStorage.setItem(`${name}-volume`, String(localSoundVolume))
    }
  }, [])

  useEffect(() => {
    soundRef.current.volume = localSoundVolume * globalVolume
  }, [globalVolume, localSoundVolume])

  return (
    <div
      title={name}
      className="flex flex-col justify-center items-center w-24 h-24"
    >
      <div
        id={`${name}-button`}
        className={`umami--click--${name}-sound flex justify-center items-center w-24 h-24 rounded-[10%] text-white/50 cursor-pointer transition-colors duration-300 md:hover:shadow-sound md:hover:bg-white/10 ${
          soundIsActive &&
          'text-white rounded-b-none md:shadow-sound md:bg-white/10'
        }`}
        onClick={() => toggleSoundState()}
      >
        <audio ref={soundRef} loop>
          <source src={`/sounds/${audioFile.name}`} type={audioFile.type} />
        </audio>
        <Image
          src={`/assets/${iconFile}`}
          alt={name}
          width={80}
          height={80}
          className={`opacity-70 md:hover:opacity-100 ${
            soundIsActive && 'opacity-100'
          }`}
        />
      </div>
      <VolumeController
        state={soundIsActive}
        soundNameOnLocalStorage={name}
        handleSoundVolume={handleLocalSoundVolume}
      />
    </div>
  )
}
