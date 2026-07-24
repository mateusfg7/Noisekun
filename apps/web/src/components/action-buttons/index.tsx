import { Clear } from './clear'
import { SaveCombo } from './save-combo'
import { Share } from './share'

export function ActionButtons() {
  return (
    <div
      data-testid="action-buttons"
      className="hidden w-full items-center justify-end gap-2 pr-14 xs:flex max-[500px]:justify-center max-[500px]:pr-0"
    >
      <SaveCombo />
      <Share />
      <Clear />
    </div>
  )
}
