import { useSoundsStateStore } from '@/stores/sounds-state-store'
import { useThemeStore } from '@/stores/theme-store'
import { button } from './styles'

export function ClearButton() {
  const bulkSoundUpdate = useSoundsStateStore(state => state.bulkUpdate)
  const soundStates = useSoundsStateStore(state => state.sounds)

  const theme = useThemeStore(state => state.theme)

  function clear() {
    console.log('Clicou')
    const disabledSoundList = soundStates.map(sound => ({
      ...sound,
      active: false
    }))

    bulkSoundUpdate(disabledSoundList)
  }

  function isDisabled() {
    return !soundStates.some(sound => sound.active)
  }

  return (
    <button
      disabled={isDisabled()}
      onClick={clear}
      className={button({ theme })}
      title="Clear all active sounds"
    >
      clear
    </button>
  )
}
