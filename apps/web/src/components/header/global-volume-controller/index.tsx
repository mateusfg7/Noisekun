import React, { useState } from 'react'
import { FiVolumeX, FiVolume2, FiVolume1, FiVolume } from 'react-icons/fi'

import { useGlobalVolumeStore } from '~/stores/global-volume-store'

import { VolumeControllerSlider } from '~/components/ui/volume-controller-slider'

export function GlobalVolumeController() {
  const MAX_VALUE = 1000

  const [rangeValue, setRangeValue] = useState(MAX_VALUE)
  const [isShowing, setIsShowing] = useState(false)

  const setGlobalVolume = useGlobalVolumeStore(state => state.setGlobalVolume)
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  const [currentVolume, setCurrentVolume] = useState(globalVolume)
  const [isMuted, setIsMuted] = useState(false)

  function handleVolume(value: number) {
    setGlobalVolume(value / MAX_VALUE)
    setRangeValue(value)
  }

  function toggleMuted() {
    if (isMuted) {
      setIsMuted(false)
      handleVolume(currentVolume)
    } else {
      setIsMuted(true)
      setCurrentVolume(globalVolume * MAX_VALUE)
      handleVolume(0)
    }
  }

  return (
    <div
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
      className="flex items-center gap-3 opacity-90 hover:opacity-100"
    >
      <div
        data-is-showing={isShowing}
        className="group relative hidden h-max w-28 items-center data-[is-showing='true']:md:flex"
      >
        <span className="sr-only">
          Global volume in {Number(globalVolume * 100).toFixed(1)}%
        </span>
        <VolumeControllerSlider
          handleVolume={handleVolume}
          minValue={0}
          maxValue={MAX_VALUE}
          rangeValue={rangeValue}
          name="global-volume-controller"
          title={`Global volume in ${Number(globalVolume * 100).toFixed(1)}%`}
        />
      </div>
      <button
        title="Enable/disable sound"
        onClick={toggleMuted}
        data-umami-event="Mute/Unmute global volume"
        className="text-primary-foreground"
      >
        {globalVolume >= 0.5 && <FiVolume2 size={25} />}
        {globalVolume >= 0.25 && globalVolume < 0.5 && <FiVolume1 size={25} />}
        {globalVolume > 0 && globalVolume < 0.25 && <FiVolume size={25} />}
        {globalVolume === 0 && <FiVolumeX size={25} />}
      </button>
    </div>
  )
}
