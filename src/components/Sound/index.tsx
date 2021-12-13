import React, { useRef, useState } from 'react'

import { VolumeController } from '../VolumeController'

import { SoundComponent, SoundButton } from './styles'

export interface ISound {
  name: string
}

export const Sound: React.FC<ISound> = ({ name }) => {
  const rename: { [index: string]: string } = {
    rain: 'rain',
    storm: 'storm',
    wind: 'wind',
    drops: 'water',
    waves: 'ocean-waves',
    water: 'small-waves',
    'birds-tree': 'forest-ambience',
    leafs: 'leafs',
    fire: 'fire',
    night: 'night',
    coffee: 'coffee',
    'noise-block': 'fan',
    train: 'train',
    'air-plane': 'air-plane',
    underwater: 'underwater'
  }

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
    <SoundComponent>
      <audio loop preload="true" ref={soundHTMLRef}>
        <source
          src={`${process.env.CDN_AUDIO_SERVER}/${rename[name]}.mp3`}
          type="audio/mp3"
        />
      </audio>

      <SoundButton
        id={`${name}-button`}
        className={soundIsActive ? 'selected' : ''}
        onClick={() => toggleSoundState()}
      >
        <img src={`/icons/${name}.svg`} className="icons" />
      </SoundButton>

      <VolumeController
        audioObject={soundHTMLRef.current}
        id={`${name}-audio-controller`}
        state={soundIsActive}
      />
    </SoundComponent>
  )
}
