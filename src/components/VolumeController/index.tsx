import React, { useEffect, useState } from 'react'

export interface IVolumeController {
  state: boolean
  soundNameOnLocalStorage: string
  handleSoundVolume: (volume: number) => void
}

export const VolumeController: React.FC<IVolumeController> = ({
  state,
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
    <div
      className={`w-full h-max relative group ${
        state ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <input
        className="slider-input absolute top-0 left-0"
        type="range"
        name="audio-decrement"
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
