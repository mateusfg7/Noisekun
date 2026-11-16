import { Clear } from "./clear";
import { SaveCombo } from "./save-combo";
import { Share } from "./share";

export function ActionButtons() {
  return (
    <div
      className="hidden w-full items-center justify-end gap-2 pr-14 max-[500px]:justify-center max-[500px]:pr-0 xs:flex"
      data-testid="action-buttons"
    >
      <SaveCombo />
      <Share />
      <Clear />
    </div>
  );
}
