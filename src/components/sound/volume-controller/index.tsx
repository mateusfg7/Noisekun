import React, { useEffect, useState } from 'react'

import { container, input } from './styles'
import { useThemeStore } from '@/stores/BackgroundStore'

export interface IVolumeController {
  isActive: boolean
  soundName: string
  soundNameOnLocalStorage: string
  handleSoundVolume: (volume: number) => void
}

export const VolumeController: React.FC<IVolumeController> = ({
  isActive,
  soundName,
  soundNameOnLocalStorage,
  handleSoundVolume
}) => {
  const [rangeValue, setRangeValue] = useState(1000)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(
        `${soundNameOnLocalStorage}-volume`
      )
      if (storageValue) setRangeValue(JSON.parse(storageValue) * 1000)
    }
  }, [])

  const theme = useThemeStore(set => set.theme)

  return (
    <div className={container({ active: isActive })}>
      <span className="sr-only">{soundName} volume controller</span>
      <input
        className={input({ theme })}
        type="range"
        name={`${soundName}-volume-controller`}
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
