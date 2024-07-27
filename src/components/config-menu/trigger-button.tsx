import { FiSettings } from 'react-icons/fi'

type Props = {
  openModal: () => void
}
export function TriggerButton({ openModal }: Props) {
  return (
    <button
      type="button"
      onClick={openModal}
      className="text-xl text-primary-foreground opacity-90 hover:opacity-100"
      data-umami-event="Open config menu"
      title="Open config menu"
    >
      <FiSettings />
    </button>
  )
}
