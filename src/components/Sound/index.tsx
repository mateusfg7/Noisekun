/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Howl } from 'howler'

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

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const Sound: React.FC<ISound> = ({ name, iconFile, audioFile }) => {
  const FADE_TIME_MS = 500

  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  const [soundIsActive, setSoundIsActive] = useState(false)
  const [howlSoundInstance, setHowlSoundInstance] = useState<Howl | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [localSoundVolume, setLocalSoundVolume] = useState(1)
  const [currentSoundVolume, setCurrentSoundVolume] = useState(
    localSoundVolume * globalVolume
  )

  async function toggleSoundState() {
    if (howlSoundInstance && !isLoading) {
      if (soundIsActive) {
        howlSoundInstance.fade(localSoundVolume, 0, FADE_TIME_MS)
        await sleep(FADE_TIME_MS)
        howlSoundInstance.pause()
      } else {
        howlSoundInstance.fade(0, localSoundVolume, FADE_TIME_MS)
        howlSoundInstance.play()
      }

      setSoundIsActive(!soundIsActive)
    }
  }

  function handleSoundVolume(volume: number) {
    const calculatedVolume = volume * globalVolume

    if (howlSoundInstance) {
      setCurrentSoundVolume(calculatedVolume)
      setLocalSoundVolume(volume)
      localStorage.setItem(`${name}-volume`, String(localSoundVolume))
    }
  }

  useEffect(() => {
    setHowlSoundInstance(
      new Howl({
        src: `./sounds/${audioFile.name}`,
        loop: true,
        onload: () => setIsLoading(false)
      })
    )

    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(`${name}-volume`)
      if (storageValue) setLocalSoundVolume(JSON.parse(storageValue))
      else localStorage.setItem(`${name}-volume`, String(localSoundVolume))
    }

    setCurrentSoundVolume(localSoundVolume * globalVolume)
  }, [])

  useEffect(() => {
    setCurrentSoundVolume(localSoundVolume * globalVolume)
  }, [globalVolume])

  useEffect(() => {
    if (howlSoundInstance) {
      howlSoundInstance.volume(currentSoundVolume)
    }
  }, [currentSoundVolume])

  return (
    <div
      title={name}
      className={`flex flex-col justify-center items-center w-24 h-24 ${
        isLoading && 'animate-none'
      }`}
    >
      <div
        id={`${name}-button`}
        className={`umami--click--${name}-sound flex justify-center items-center w-24 h-24 rounded-[10%] text-white/50 ${
          isLoading && 'motion-safe:animate-pulse'
        } ${
          !isLoading &&
          'cursor-pointer transition-colors duration-300 md:hover:shadow-sound md:hover:bg-white/10'
        } ${
          soundIsActive &&
          'text-white rounded-b-none md:shadow-sound md:bg-white/10'
        }`}
        onClick={() => toggleSoundState()}
      >
        <Image
          src={`/assets/${iconFile}`}
          alt={name}
          width={80}
          height={80}
          className={`opacity-40 ${
            !isLoading && 'opacity-70 md:hover:opacity-100'
          } ${soundIsActive && 'opacity-100'}`}
        />
      </div>
      <VolumeController
        state={soundIsActive}
        soundNameOnLocalStorage={name}
        handleSoundVolume={handleSoundVolume}
      />
    </div>
  )
}
