import React, { useState } from 'react'

import VolumeControllerInput from './styles'

export interface IVolumeController {
  state: boolean
  handleSoundVolume: (volume: number) => void
}

export const VolumeController: React.FC<IVolumeController> = ({
  state,
  handleSoundVolume
}) => {
  const [rangeValue, setRangeValue] = useState(1000)

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
        handleSoundVolume(Number(event.target.value) / 1000)
      }}
    />
  )
}
