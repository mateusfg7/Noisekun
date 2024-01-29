import { useSoundsStateStore } from '~/stores/sounds-state-store'
import { useThemeStore } from '~/stores/theme-store'

import { actionButton } from '../styles'
import { useScopedI18n } from '~/i18n/client'

export function Clear() {
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

  const scopedT = useScopedI18n('action-buttons.clear')

  return (
    <button
      disabled={isDisabled()}
      onClick={clear}
      className={actionButton({ theme })}
      title={scopedT('button-title')}
      data-umami-event="Clear Button"
    >
      {scopedT('button-text')}
    </button>
  )
}
