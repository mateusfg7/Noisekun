/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Howl } from 'howler'

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

  const [soundIsActive, setSoundIsActive] = useState(false)
  const [howlSoundInstance, setHowlSoundInstance] = useState<Howl | null>(null)
  const [currentSoundVolume, setCurrentSoundVolume] = useState(1)

  useEffect(() => {
    setHowlSoundInstance(
      new Howl({
        src: `./sounds/${audioFile.name}`,
        loop: true,
        html5: true
      })
    )
  }, [])

  async function toggleSoundState() {
    if (howlSoundInstance) {
      if (soundIsActive) {
        howlSoundInstance.fade(currentSoundVolume, 0, FADE_TIME_MS)
        await sleep(FADE_TIME_MS)
        howlSoundInstance.pause()
      } else {
        howlSoundInstance.fade(0, currentSoundVolume, FADE_TIME_MS)
        howlSoundInstance.play()
      }

      setSoundIsActive(!soundIsActive)
    }
  }

  function handleSoundVolume(volume: number) {
    if (howlSoundInstance) {
      howlSoundInstance.volume(volume)
      setCurrentSoundVolume(volume)
    }
  }

  return (
    <div title={name} className="flex flex-col justify-center items-center w-24 h-24">
      <div
        id={`${name}-button`}
        className={`umami--click--${name}-sound flex justify-center items-center w-24 h-24 rounded-[10%] cursor-pointer transition-colors duration-300 text-white/50 md:hover:shadow-sound md:hover:bg-white/10 ${soundIsActive && 'text-white rounded-b-none md:shadow-sound md:bg-white/10'}`}
        onClick={() => toggleSoundState()}
      >
        <Image src={`/assets/${iconFile}`} alt={name} width={80} height={80} className={`opacity-70 md:hover:opacity-100 ${soundIsActive && 'opacity-100'}`}/>
      </div>
      <VolumeController
        state={soundIsActive}
        handleSoundVolume={handleSoundVolume}
      />
    </div>
  )
}
