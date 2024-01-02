import { Clear } from './clear'
import { SaveCombo } from './save-combo'
import { Share } from './share'

export function ActionButtons() {
  return (
    <div
      data-testid="action-buttons"
      className="hidden w-full items-center justify-end gap-2 px-4 xs:flex"
    >
      <SaveCombo />
      <Share />
      <Clear />
    </div>
  )
}
