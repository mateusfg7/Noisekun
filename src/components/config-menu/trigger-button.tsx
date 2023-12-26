import { FiSettings } from 'react-icons/fi'

import { useThemeStore } from '~/stores/theme-store'

import { triggerButton } from './styles'

type Props = {
  openModal: () => void
}
export function TriggerButton({ openModal }: Props) {
  const theme = useThemeStore(state => state.theme)

  return (
    <button
      type="button"
      onClick={openModal}
      className={triggerButton({ theme })}
      data-umami-event="Open config menu"
      title="Open config menu"
    >
      <FiSettings />
    </button>
  )
}
