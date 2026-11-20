import { Pomodoro } from "~/components/header/pomodoro";

import { Clear } from "./clear";
import { SaveCombo } from "./save-combo";
import { Share } from "./share";

export function ActionButtons() {
  return (
    <div
      className="hidden w-full items-center justify-end gap-2 max-[500px]:justify-center xs:flex sm:justify-between"
      data-testid="action-buttons"
    >
      <div className="hidden sm:block">
        <Pomodoro />
      </div>
      <div className="flex items-center gap-2">
        <SaveCombo />
        <Share />
        <Clear />
      </div>
    </div>
  );
}
