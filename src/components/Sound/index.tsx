/* eslint-disable multiline-ternary */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { useGlobalVolumeStore } from '../../stores/GlobalVolumeStore'

import { VolumeController } from '../VolumeController'

import { Container, Icon } from './styles'

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

  function toggleSoundState() {
    if (soundIsActive) soundRef.current.pause()
    else soundRef.current.play()

    setSoundIsActive(!soundIsActive)
  }

  function handleLocalSoundVolume(volume: number) {
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
    <Container title={name}>
      <audio ref={soundRef} loop>
        <source src={`/sounds/${audioFile.name}`} type={audioFile.type} />
      </audio>
      <Icon
        active={soundIsActive}
        className={`umami--click--${name}-sound`}
        onClick={() => toggleSoundState()}
      >
        <Image src={`/assets/${iconFile}`} alt={name} width={80} height={80} />
      </Icon>
      <VolumeController
        isActive={soundIsActive}
        soundName={name}
        soundNameOnLocalStorage={name}
        handleSoundVolume={handleLocalSoundVolume}
      />
    </Container>
  )
}
