import React, { useRef, useState } from 'react'

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

    if (!soundIsActive) {
      if (soundHTMLElement) {
        soundHTMLElement.play()
        setSoundIsActive(true)
      }
    } else if (soundHTMLElement) {
      soundHTMLElement.pause()
      setSoundIsActive(false)
    }
  }

  return (
    <SoundComponent title={`${name}`}>
      <audio loop preload="true" ref={soundHTMLRef}>
        <source
          src={`${process.env.CDN_AUDIO_SERVER}/${audioFile.name}`}
          type={`${audioFile.type}`}
        />
      </audio>

      <SoundButton
        id={`${name}-button`}
        className={soundIsActive ? 'selected' : ''}
        onClick={() => toggleSoundState()}
      >
        <img src={`/assets/${iconFile}`} className="icons" />
      </SoundButton>

      <VolumeController
        audioObject={soundHTMLRef.current}
        state={soundIsActive}
      />
    </SoundComponent>
  )
}
