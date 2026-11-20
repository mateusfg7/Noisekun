import { Button } from "@noisekun/ui/components/button";

import { useSoundsStateStore } from "~/stores/sounds-state-store";

export function Clear() {
  const bulkSoundUpdate = useSoundsStateStore((state) => state.bulkUpdate);
  const soundStates = useSoundsStateStore((state) => state.sounds);

  const hasActiveSounds = soundStates.some((sound) => sound.active);

  function clear() {
    bulkSoundUpdate(soundStates.map((sound) => ({ ...sound, active: false })));
  }

  return (
    <Button
      data-umami-event="Clear Button"
      disabled={!hasActiveSounds}
      onClick={clear}
      size="pill"
      title="Clear all active sounds"
      variant="secondary"
    >
      clear
    </Button>
  );
}
