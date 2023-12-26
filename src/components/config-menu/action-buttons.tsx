import { tv } from 'tailwind-variants'

const actionButton = tv({
  base: /*tw:*/ 'flex-1 rounded-lg px-5 py-5 text-lg leading-none transition-colors md:py-3',
  variants: {
    action: {
      cancel: /*tw:*/ 'text-red-800 hover:bg-red-800 hover:text-red-100',
      save: /*tw:*/ 'bg-green-100 text-green-950 hover:bg-green-900 hover:text-green-100'
    }
  }
})

type ActionButtonProps = {
  onCancel: () => void
  onSave: () => void
}
export const ActionButtons = ({ onCancel, onSave }: ActionButtonProps) => (
  <div className="flex justify-center gap-1">
    <button
      onClick={onCancel}
      data-umami-event="Reset pomodoro config"
      className={actionButton({ action: 'cancel' })}
    >
      Cancel
    </button>
    <button
      onClick={onSave}
      data-umami-event="Save pomodoro config"
      className={actionButton({ action: 'save' })}
    >
      Save
    </button>
  </div>
)
