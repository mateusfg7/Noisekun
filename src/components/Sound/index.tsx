/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Howl, Howler } from 'howler'

import { VolumeController } from '../VolumeController'
import { SoundComponent, SoundButton } from './styles'

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
  const [soundIsLoading, setSoundIsLoading] = useState(true)
  const [currentSoundVolume, setCurrentSoundVolume] = useState(1)

  useEffect(() => {
    setHowlSoundInstance(
      new Howl({
        src: `./sounds/${audioFile.name}`,
        loop: true,
        onload: () => {
          setSoundIsLoading(false)
        }
      })
    )
  }, [])

  async function toggleSoundState() {
    if (howlSoundInstance && !soundIsLoading) {
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
    <SoundComponent title={name}>
      <SoundButton
        id={`${name}-button`}
        className={`${soundIsActive ? 'selected' : ''} ${
          soundIsLoading && 'disabled'
        } umami--click--${name}-sound`}
        onClick={() => toggleSoundState()}
      >
        <Image src={`/assets/${iconFile}`} alt={name} width={80} height={80} />
      </SoundButton>
      <VolumeController
        state={soundIsActive}
        handleSoundVolume={handleSoundVolume}
      />
    </SoundComponent>
  )
}
