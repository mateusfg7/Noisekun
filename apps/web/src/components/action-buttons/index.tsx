import { Clear } from "./clear";
import { SaveCombo } from "./save-combo";
import { Share } from "./share";

export function ActionButtons() {
  return (
    <div
      className="hidden w-full items-center justify-end gap-2 max-[500px]:justify-center xs:flex"
      data-testid="action-buttons"
    >
      <SaveCombo />
      <Share />
      <Clear />
    </div>
  );
}
