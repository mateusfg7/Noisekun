import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

import { useComboStore } from '~/stores/combo-store'
import { useSoundsStateStore } from '~/stores/sounds-state-store'
import { useThemeStore } from '~/stores/theme-store'

import { randomString } from '~/utils/random-string'

import { actionButton } from '../styles'

export function SaveCombo() {
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
          className="text-primary-foreground placeholder:text-primary-foreground/60 bg-primary-foreground/5 form-input w-32 animate-show-input rounded-xl border-none px-2 py-0 text-center leading-none tracking-wider duration-300 placeholder:text-sm focus:ring-0"
          data-testid="combo-name-input"
        />
      )}
      <button
        disabled={disabled}
        onClick={save}
        className={actionButton({
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
