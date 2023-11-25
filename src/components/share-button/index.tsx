import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { useSoundsStateStore } from '@/stores/sounds-state-store'
import { useThemeStore } from '@/stores/theme-store'

import { actionButton } from '@/shared/styles/action-button'

import { ConfirmationModal } from './confirmation-modal'

export function ShareButton() {
  const searchParams = useSearchParams()
  const soundStates = useSoundsStateStore(state => state.sounds)
  const theme = useThemeStore(state => state.theme)
  const [showModal, setShowModal] = useState(false)

  async function handleCopyCombo() {
    if (!window || !navigator) return

    const hostname = window.location.hostname
    const isLocalhost = hostname === 'localhost'
    const protocol = isLocalhost ? 'http' : 'https'

    await navigator.clipboard
      .writeText(
        `${protocol}://${hostname}${isLocalhost && ':3000'}/?${searchParams}`
      )
      .then(() => setShowModal(true))
  }

  function isDisabled() {
    return !soundStates.some(sound => sound.active)
  }

  return (
    <>
      <button
        disabled={isDisabled()}
        onClick={handleCopyCombo}
        className={actionButton({ theme })}
        title="Share current combo"
        data-umami-event="Clear Button"
      >
        share
      </button>

      <ConfirmationModal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}
