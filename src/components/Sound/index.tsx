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
    if (howlSoundInstance) {
      if (soundIsActive) {
        howlSoundInstance.fade(1, 0, FADE_TIME_MS)
        await sleep(FADE_TIME_MS)
        howlSoundInstance.pause()
      } else {
        howlSoundInstance.fade(0, 1, FADE_TIME_MS)
        howlSoundInstance.play()
      }

      setSoundIsActive(!soundIsActive)
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
      {/* <VolumeController
        state={soundIsActive}
        audioElement={soundHTMLRef.current}
      /> */}
    </SoundComponent>
  )
}
