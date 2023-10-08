import { useState } from 'react'

import { useComboStore } from '@/stores/combo-store'
import { useSoundsStateStore } from '@/stores/sounds-state-store'
import { useThemeStore } from '@/stores/theme-store'

import { actionButton } from '@/shared/styles/action-button'
import { input } from './styles'
import { FiCheck } from 'react-icons/fi'
import { randomString } from '@/libs/utils'

export function SaveComboButton() {
  const sounds = useSoundsStateStore(state => state.sounds)
  const theme = useThemeStore(state => state.theme)
  const saveCombo = useComboStore(state => state.saveCombo)

  const [comboName, setComboName] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showInput, setShowInput] = useState(false)

  function save() {
    if (!sounds.some(sound => sound.active)) return

    if (!showInput) {
      setShowInput(true)
      return
    }

    if (!comboName) return

    const activeSounds = sounds.filter(sound => sound.active)

    saveCombo({
      id: randomString(6),
      name: comboName,
      sounds: activeSounds,
      theme
    })

    setComboName('')
    setShowInput(false)
    setShowSuccess(true)

    setTimeout(() => setShowSuccess(false), 2000)
  }

  const disabled = showSuccess || !sounds.some(sound => sound.active)

  return (
    <div className="flex gap-1">
      {showInput && (
        <input
          disabled={disabled}
          type="text"
          placeholder="combo name..."
          value={comboName}
          onChange={e => setComboName(e.target.value)}
          className={input({ theme })}
        />
      )}
      <button
        disabled={disabled}
        onClick={save}
        className={actionButton({
          theme,
          className: /*tw:*/ 'flex items-center'
        })}
        title="Save current combo"
      >
        {showSuccess ? (
          <span className="inline-flex w-10 justify-center">
            <FiCheck />
          </span>
        ) : (
          <span className="inline-flex w-10 justify-center">save</span>
        )}
      </button>
    </div>
  )
}
