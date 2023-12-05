import React, { useEffect, useState } from 'react'

import { useThemeStore } from '~/stores/theme-store'
import { useSoundsStateStore } from '~/stores/sounds-state-store'

import { container, input } from './styles'

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

  useEffect(() => {
    const soundState = getSound(soundId)

    if (soundState) setRangeValue(soundState.volume * 1000)
  }, [sounds])

  const theme = useThemeStore(set => set.theme)

  return (
    <div className={container({ active: isActive })}>
      <label htmlFor={`${soundId}-volume-controller`} className="sr-only">
        {soundName} volume controller
      </label>
      <input
        className={input({ theme })}
        type="range"
        id={`${soundId}-volume-controller`}
        name={`${soundId}-volume-controller`}
        title={`${soundName} volume in ${Number(rangeValue / 10).toFixed(1)}%`}
        min="20"
        max="1000"
        value={rangeValue}
        style={{
          backgroundSize: `${(rangeValue * 100) / 1000}%`
        }}
        onChange={event => {
          setRangeValue(Number(event.target.value))
          handleSoundVolume(Number(event.target.value) / 1000)
        }}
      />
    </div>
  )
}
