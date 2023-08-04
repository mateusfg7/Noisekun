import React, { useEffect, useState } from 'react'

import { container } from './styles'

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

  return (
    <div className={container({ active: isActive })}>
      <span className="sr-only">{soundName} volume controller</span>
      <input
        className="slider-input absolute top-0 left-0"
        type="range"
        name={`${soundName}-volume-controller`}
        title={`${soundName} volume in ${Number(rangeValue / 10).toFixed(1)}%`}
        min="20"
        max="1000"
        value={rangeValue}
        style={{
          backgroundImage: 'linear-gradient(#fff, #fff)',
          backgroundSize: `${(rangeValue * 100) / 1000}%`,
          backgroundRepeat: 'no-repeat'
        }}
        onChange={event => {
          setRangeValue(Number(event.target.value))
          handleSoundVolume(Number(event.target.value) / 1000)
        }}
      />
    </div>
  )
}
