import React, { useState } from 'react'
import { useGlobalVolumeStore } from '../../stores/GlobalVolumeStore'

export const GlobalVolumeController: React.FC = () => {
  const MAX_VALUE = 1000

  const [rangeValue, setRangeValue] = useState(MAX_VALUE)

  const setGlobalVolume = useGlobalVolumeStore(state => state.setGlobalVolume)

  function handleVolume(value: number) {
    setGlobalVolume(value / MAX_VALUE)
    setRangeValue(value)
  }

  return (
    <div className="w-full h-max relative group flex items-center">
      <input
        className="slider-input"
        type="range"
        name="audio-decrement"
        min="0"
        max={MAX_VALUE}
        value={rangeValue}
        style={{
          backgroundImage: 'linear-gradient(#fff, #fff)',
          backgroundSize: `${(rangeValue * 100) / MAX_VALUE}%`,
          backgroundRepeat: 'no-repeat'
        }}
        onChange={event => handleVolume(Number(event.target.value))}
      />
    </div>
  )
}
