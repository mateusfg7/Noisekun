import type React from "react";
import { useEffect, useState } from "react";

import { VolumeControllerSlider } from "~/components/ui/volume-controller-slider";
import { useSoundsStateStore } from "~/stores/sounds-state-store";

export type IVolumeController = {
  handleSoundVolume: (volume: number) => void;
  isActive: boolean;
  soundId: string;
  soundName: string;
};

export const VolumeController: React.FC<IVolumeController> = ({
  isActive,
  soundName,
  soundId,
  handleSoundVolume,
}) => {
  const [rangeValue, setRangeValue] = useState(1000);

  const getSound = useSoundsStateStore((state) => state.getSound);
  const sounds = useSoundsStateStore((state) => state.sounds);

  function handleVolume(volume: number) {
    setRangeValue(volume);
    handleSoundVolume(volume / 1000);
  }

  useEffect(() => {
    const soundState = getSound(soundId);

    if (soundState) {
      setRangeValue(soundState.volume * 1000);
    }
  }, [sounds]);

  return (
    <div
      className="opacity-1 group relative h-max w-full data-[is-active='false']:opacity-0"
      data-is-active={isActive}
    >
      <label className="sr-only" htmlFor={`${soundId}-volume-controller`}>
        {soundName} volume controller
      </label>
      <VolumeControllerSlider
        className="absolute left-0 top-0"
        handleVolume={handleVolume}
        id={`${soundId}-volume-controller`}
        maxValue={1000}
        minValue={20}
        name={`${soundId}-volume-controller`}
        rangeValue={rangeValue}
        title={`${soundName} volume in ${Number(rangeValue / 10).toFixed(1)}%`}
      />
    </div>
  );
};
