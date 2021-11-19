import React, { useState } from 'react'

import VolumeControllerInput from './styles'

export interface IVolumeController {
  audioObject: HTMLAudioElement | null;
  id: string;
  state: boolean;
}

export const VolumeController: React.FC<IVolumeController> = ({
  audioObject,
  id,
  state
}) => {
  const changeVolume = (
    audio: HTMLAudioElement | null,
    value: number
  ): void => {
    if (audio) {
      audio.volume = value
    }
  }

  const [rangeValue, setRangeValue] = useState(1000)

  return (
    <VolumeControllerInput
      className={state ? 'selected' : ''}
      type="range"
      name="audio-decrement"
      id={id}
      min="1"
      max="1000"
      value={rangeValue}
      onChange={(event) => {
        setRangeValue(Number(event.target.value))
        const decimalValue = Number(event.target.value) / 1000
        changeVolume(audioObject, decimalValue)
      }}
    />
  )
}
