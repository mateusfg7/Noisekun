import type React from "react";

import { VolumeControllerSlider } from "~/components/ui/volume-controller-slider";
import { useIsClient } from "~/hooks/use-is-client";
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
  const storedVolume = useSoundsStateStore(
    (state) => state.sounds.find((sound) => sound.id === soundId)?.volume
  );

  // The sounds store is persisted in localStorage; render the default until
  // hydration so the slider matches the server HTML.
  const isClient = useIsClient();
  const rangeValue = ((isClient ? storedVolume : undefined) ?? 1) * 1000;

  function handleVolume(volume: number) {
    handleSoundVolume(volume / 1000);
  }

  return (
    <div
      className="group flex w-[90%] items-center opacity-70 transition-opacity duration-300 hover:opacity-100 data-[is-active='false']:pointer-events-none data-[is-active='false']:opacity-0"
      data-is-active={isActive}
    >
      <label className="sr-only" htmlFor={`${soundId}-volume-controller`}>
        {soundName} volume controller
      </label>
      <VolumeControllerSlider
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
