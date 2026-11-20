import { Button } from "@noisekun/ui/components/button";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { useSoundsStateStore } from "~/stores/sounds-state-store";

export function Share() {
  const searchParams = useSearchParams();
  const soundStates = useSoundsStateStore((state) => state.sounds);

  const hasActiveSounds = soundStates.some((sound) => sound.active);

  async function handleCopyCombo() {
    const url = `${window.location.origin}/?${searchParams}`;

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Combo URL copied to clipboard");
    } catch {
      toast.error("Couldn't copy the combo URL");
    }
  }

  return (
    <Button
      data-umami-event="Share Button"
      disabled={!hasActiveSounds}
      onClick={handleCopyCombo}
      size="pill"
      title="Share current combo"
      variant="secondary"
    >
      share
    </Button>
  );
}
