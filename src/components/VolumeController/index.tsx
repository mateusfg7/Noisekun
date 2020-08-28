import React, { useState } from 'react';

import { VolumeControllerInput } from './styles';

const VolumeControler: React.FC<IVolumeController> = ({ audioObject, id }) => {
  const changeVolume = (
    audio: HTMLAudioElement | null,
    value: number
  ): void => {
    if (audio) {
      audio.volume = value;
    }
  };

  const [rangeValue, setRangeValue] = useState(1000);

  return (
    <VolumeControllerInput
      type="range"
      name="audio-decrement"
      id={id}
      min="1"
      max="1000"
      value={rangeValue}
      onChange={(event) => {
        setRangeValue(Number(event.target.value));
        const decimalValue = Number(event.target.value) / 1000;
        changeVolume(audioObject, decimalValue);
      }}
    />
  );
};

export default VolumeControler;
