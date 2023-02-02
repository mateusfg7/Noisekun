import React, { useState } from 'react'
import { FiVolume2, FiVolume1, FiVolume } from 'react-icons/fi'

import { useGlobalVolumeStore } from '../../stores/GlobalVolumeStore'

import { Container, SliderContainer } from './styles'

export const GlobalVolumeController: React.FC = () => {
  const MAX_VALUE = 1000

  const [rangeValue, setRangeValue] = useState(MAX_VALUE)
  const [isShowing, setIsShowing] = useState(false)

  const setGlobalVolume = useGlobalVolumeStore(state => state.setGlobalVolume)
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  function handleVolume(value: number) {
    setGlobalVolume(value / MAX_VALUE)
    setRangeValue(value)
  }

  return (
    <Container
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <SliderContainer $isShowing={isShowing}>
        <span className="sr-only">
          Global volume in {Number(globalVolume * 100).toFixed(1)}%
        </span>
        <input
          className="slider-input"
          type="range"
          name="global-volume-controller"
          title={`Global volume in ${Number(globalVolume * 100).toFixed(1)}%`}
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
      </SliderContainer>
      <button
        title="Toggle Global Volume Controller"
        onClick={() => setIsShowing(!isShowing)}
      >
        {globalVolume >= 0.5 && <FiVolume2 size={25} />}
        {globalVolume >= 0.1 && globalVolume < 0.5 && <FiVolume1 size={25} />}
        {globalVolume < 0.1 && <FiVolume size={25} />}
      </button>
    </Container>
  )
}
