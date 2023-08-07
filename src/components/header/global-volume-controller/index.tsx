import React, { useState } from 'react'
import { FiVolume2, FiVolume1, FiVolume } from 'react-icons/fi'

import { useGlobalVolumeStore } from '@/stores/global-volume-store'
import { useThemeStore } from '@/stores/theme-store'
import { volumeControllerInput } from '@/shared/styles/volume-controller-input'
import { soundButton } from './styles'

export function GlobalVolumeController() {
  const MAX_VALUE = 1000

  const [rangeValue, setRangeValue] = useState(MAX_VALUE)
  const [isShowing, setIsShowing] = useState(false)

  const setGlobalVolume = useGlobalVolumeStore(state => state.setGlobalVolume)
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  function handleVolume(value: number) {
    setGlobalVolume(value / MAX_VALUE)
    setRangeValue(value)
  }

  const theme = useThemeStore(set => set.theme)

  return (
    <div
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
      className="flex items-center gap-3 opacity-90 hover:opacity-100"
    >
      <div
        data-isShowing={isShowing}
        className="group relative hidden h-max w-28 items-center data-[isShowing='true']:flex"
      >
        <span className="sr-only">
          Global volume in {Number(globalVolume * 100).toFixed(1)}%
        </span>
        <input
          className={volumeControllerInput({ theme })}
          type="range"
          name="global-volume-controller"
          title={`Global volume in ${Number(globalVolume * 100).toFixed(1)}%`}
          min="0"
          max={MAX_VALUE}
          value={rangeValue}
          style={{
            backgroundSize: `${(rangeValue * 100) / MAX_VALUE}%`
          }}
          onChange={event => handleVolume(Number(event.target.value))}
        />
      </div>
      <button
        title="Toggle Global Volume Controller"
        className={soundButton({ theme })}
        onClick={() => setIsShowing(!isShowing)}
      >
        {globalVolume >= 0.5 && <FiVolume2 size={25} />}
        {globalVolume >= 0.1 && globalVolume < 0.5 && <FiVolume1 size={25} />}
        {globalVolume < 0.1 && <FiVolume size={25} />}
      </button>
    </div>
  )
}
