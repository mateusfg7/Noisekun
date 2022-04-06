import React, { useRef, useState } from 'react'
import Image from 'next/image'
// import { Image } from '../Image'

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

export const Sound: React.FC<ISound> = ({ name, iconFile, audioFile }) => {
  const [soundIsActive, setSoundIsActive] = useState(false)
  const soundHTMLRef = useRef<HTMLAudioElement>()

  function toggleSoundState() {
    const soundHTMLElement = soundHTMLRef.current

    if (!soundIsActive) soundHTMLElement.play()
    else soundHTMLElement.pause()

    setSoundIsActive(!soundIsActive)
  }

  return (
    <SoundComponent title={name}>
      <audio loop preload="true" ref={soundHTMLRef}>
        <source src={`/sounds/${audioFile.name}`} type={audioFile.type} />
      </audio>

      <SoundButton
        id={`${name}-button`}
        className={`${
          soundIsActive ? 'selected' : ''
        } umami--click--${name}-sound`}
        onClick={() => toggleSoundState()}
      >
        <Image
          src={`/assets/${iconFile}`}
          width={80}
          height={80}
          placeholder="blur"
          blurDataURL={name}
          unoptimized
        />
      </SoundButton>

      <VolumeController
        state={soundIsActive}
        audioElement={soundHTMLRef.current}
      />
    </SoundComponent>
  )
}
