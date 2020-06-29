import React, { useState } from "react";

import "./style.css";

const VolumeControler: React.FunctionComponent<IVolumeControler> = ({
  audioObject,
}) => {
  const changeVolume = (audio: HTMLAudioElement, value: number): void => {
    if (audio) {
      audio.volume = value;
    }
  };

  const [rangeValue, setRangeValue] = useState(1000);

  return (
    <input
      type='range'
      name='audio-decrement'
      className='audio-controller'
      min='1'
      max='1000'
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
