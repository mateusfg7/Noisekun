import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { useSoundsStateStore } from '~/stores/sounds-state-store'

import { actionButton } from '../styles'

import { ConfirmationModal } from './confirmation-modal'

export function Share() {
  const searchParams = useSearchParams()
  const soundStates = useSoundsStateStore(state => state.sounds)
  const [showModal, setShowModal] = useState(false)

  async function handleCopyCombo() {
    if (!window || !navigator) return

    const hostname = window.location.hostname
    const isLocalhost = hostname === 'localhost'
    const protocol = isLocalhost ? 'http' : 'https'

    await navigator.clipboard
      .writeText(
        `${protocol}://${hostname}${
          isLocalhost ? ':3000' : ''
        }/?${searchParams}`
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
        className={actionButton()}
        title="Share current combo"
        data-umami-event="Clear Button"
      >
        share
      </button>

      <ConfirmationModal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}
