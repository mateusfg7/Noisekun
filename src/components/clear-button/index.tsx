import { useSoundsStateStore } from '@/stores/sounds-state-store'
import { useThemeStore } from '@/stores/theme-store'
import { actionButton } from '@/shared/styles/action-button'

export function ClearButton() {
  const bulkSoundUpdate = useSoundsStateStore(state => state.bulkUpdate)
  const soundStates = useSoundsStateStore(state => state.sounds)

  const theme = useThemeStore(state => state.theme)

  function clear() {
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
      className={actionButton({ theme })}
      title="Clear all active sounds"
      data-umami-event="Clear Button"
    >
      clear
    </button>
  )
}
