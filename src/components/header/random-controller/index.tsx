import React from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi'

import { useThemeStore } from '@/stores/theme-store'
import { controllerButton } from './styles'
import { useGlobalRandomModeStore } from '@/stores/random-mode-store'

export function RandomModeButton() {
  const { randomMode, setRandomMode } = useGlobalRandomModeStore()
  const theme = useThemeStore(set => set.theme)

  return (
    <button
      title="Enable/Disable Random Mode"
      className={controllerButton({ theme })}
      onClick={() => setRandomMode(!randomMode)}
      data-umami-event="Enable/Disable Random Mode"
    >
      {randomMode ? <FiZapOff size={25} /> : <FiZap size={25} />}
    </button>
  )
}
