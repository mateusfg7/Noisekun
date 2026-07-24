import { useSoundsStateStore } from "~/stores/sounds-state-store";

import { actionButton } from "../styles";

export function Clear() {
  const bulkSoundUpdate = useSoundsStateStore((state) => state.bulkUpdate);
  const soundStates = useSoundsStateStore((state) => state.sounds);

  function clear() {
    const disabledSoundList = soundStates.map((sound) => ({
      ...sound,
      active: false,
    }));

    bulkSoundUpdate(disabledSoundList);
  }

  function isDisabled() {
    return !soundStates.some((sound) => sound.active);
  }

  return (
    <button
      className={actionButton()}
      data-umami-event="Clear Button"
      disabled={isDisabled()}
      onClick={clear}
      title="Clear all active sounds"
    >
      clear
    </button>
  );
}
