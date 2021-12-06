import React, { useRef, useState } from 'react'

import { VolumeController } from '../VolumeController'

import { SoundComponent, SoundButton } from './styles'

export interface ISound {
  name: string
}

export const Sound: React.FC<ISound> = ({ name }) => {
  const icons: { [index: string]: string } = {
    rain: 'icofont-rainy',
    storm: 'icofont-rainy-thunder',
    wind: 'icofont-wind',
    water: 'icofont-water-drop',
    'ocean-waves': 'icofont-wind-waves',
    'small-waves': 'icofont-wave',
    'forest-ambience': 'icofont-tree-alt',
    leafs: 'icofont-leaf',
    fire: 'icofont-fire-burn',
    night: 'icofont-night',
    coffee: 'icofont-coffee-mug',
    fan: 'icofont-headphone',
    train: 'icofont-train-line',
    'air-plane': 'icofont-airplane',
    underwater: 'icofont-swimmer'
  }

  const [soundIsActive, setSoundIsActive] = useState(false)
  const soundHTMLRef = useRef<HTMLAudioElement>()

  function changeStateOfSound() {
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
          src={`${process.env.CDN_AUDIO_SERVER}/${name}.mp3`}
          type="audio/mp3"
        />
      </audio>

      <SoundButton
        id={`${name}-button`}
        className={soundIsActive ? 'selected' : ''}
        onClick={() => changeStateOfSound()}
      >
        <i className={`${icons[name]} icons`} />
      </SoundButton>

      <VolumeController
        audioObject={soundHTMLRef.current}
        id={`${name}-audio-controller`}
        state={soundIsActive}
      />
    </SoundComponent>
  )
}
