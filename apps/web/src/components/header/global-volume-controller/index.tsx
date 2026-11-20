import { Button } from "@noisekun/ui/components/button";
import {
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeXIcon,
} from "lucide-react";
import { useRef, useState } from "react";

import { VolumeControllerSlider } from "~/components/ui/volume-controller-slider";
import { useGlobalVolumeStore } from "~/stores/global-volume-store";

function VolumeLevelIcon({ volume }: { volume: number }) {
  if (volume === 0) {
    return <VolumeXIcon />;
  }

  if (volume < 0.25) {
    return <VolumeIcon />;
  }

  if (volume < 0.5) {
    return <Volume1Icon />;
  }

  return <Volume2Icon />;
}

export function GlobalVolumeController() {
  const MAX_VALUE = 1000;

  const [rangeValue, setRangeValue] = useState(MAX_VALUE);

  const setGlobalVolume = useGlobalVolumeStore(
    (state) => state.setGlobalVolume
  );

  const globalVolume = useGlobalVolumeStore((state) => state.globalVolume);

  // Only read in the click handler, so refs avoid needless re-renders.
  const volumeBeforeMuteRef = useRef(globalVolume);
  const isMutedRef = useRef(false);

  function handleVolume(value: number) {
    setGlobalVolume(value / MAX_VALUE);
    setRangeValue(value);
  }

  function toggleMuted() {
    if (isMutedRef.current) {
      isMutedRef.current = false;
      handleVolume(volumeBeforeMuteRef.current);
    } else {
      isMutedRef.current = true;
      volumeBeforeMuteRef.current = globalVolume * MAX_VALUE;
      handleVolume(0);
    }
  }

  return (
    <div className="group/volume flex items-center gap-2">
      <div className="group relative hidden h-max w-28 items-center md:group-focus-within/volume:flex md:group-hover/volume:flex">
        <VolumeControllerSlider
          handleVolume={handleVolume}
          label="Global volume"
          maxValue={MAX_VALUE}
          minValue={0}
          rangeValue={rangeValue}
          title={`Global volume in ${Number(globalVolume * 100).toFixed(1)}%`}
        />
      </div>
      <Button
        data-umami-event="Mute/Unmute global volume"
        onClick={toggleMuted}
        size="icon-pill"
        title="Enable/disable sound"
        variant="ghost"
      >
        <VolumeLevelIcon volume={globalVolume} />
      </Button>
    </div>
  );
}
