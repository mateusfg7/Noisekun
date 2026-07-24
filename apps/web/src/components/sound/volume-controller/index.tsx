import React, { useEffect, useState } from 'react'

import { useSoundsStateStore } from '~/stores/sounds-state-store'
import { VolumeControllerSlider } from '~/components/ui/volume-controller-slider'

export interface IVolumeController {
  isActive: boolean
  soundName: string
  soundId: string
  handleSoundVolume: (volume: number) => void
}

export const VolumeController: React.FC<IVolumeController> = ({
  isActive,
  soundName,
  soundId,
  handleSoundVolume
}) => {
  const [rangeValue, setRangeValue] = useState(1000)

  const getSound = useSoundsStateStore(state => state.getSound)
  const sounds = useSoundsStateStore(state => state.sounds)

  function handleVolume(volume: number) {
    setRangeValue(volume)
    handleSoundVolume(volume / 1000)
  }

  useEffect(() => {
    const soundState = getSound(soundId)

    if (soundState) setRangeValue(soundState.volume * 1000)
  }, [sounds])

  return (
    <div
      data-is-active={isActive}
      className="opacity-1 group relative h-max w-full data-[is-active='false']:opacity-0"
    >
      <label htmlFor={`${soundId}-volume-controller`} className="sr-only">
        {soundName} volume controller
      </label>
      <VolumeControllerSlider
        handleVolume={handleVolume}
        minValue={20}
        maxValue={1000}
        rangeValue={rangeValue}
        id={`${soundId}-volume-controller`}
        name={`${soundId}-volume-controller`}
        title={`${soundName} volume in ${Number(rangeValue / 10).toFixed(1)}%`}
        className="absolute left-0 top-0"
      />
    </div>
  )
}
