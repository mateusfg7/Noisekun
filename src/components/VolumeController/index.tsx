import React, { useState } from 'react'

import VolumeControllerInput from './styles'

export interface IVolumeController {
  state: boolean
  audioElement: HTMLAudioElement
}

export const VolumeController: React.FC<IVolumeController> = ({
  state,
  audioElement
}) => {
  const [rangeValue, setRangeValue] = useState(1000)

  function handleVolume(volume: number) {
    audioElement.volume = volume
  }

  return (
    <VolumeControllerInput
      className={state ? 'selected' : ''}
      type="range"
      name="audio-decrement"
      min="20"
      max="1000"
      value={rangeValue}
      percentValue={(rangeValue * 100) / 1000}
      onChange={event => {
        setRangeValue(Number(event.target.value))
        handleVolume(Number(event.target.value) / 1000)
      }}
    />
  )
}
