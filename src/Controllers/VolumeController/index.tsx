import React from "react";

const VolumeControler: React.FunctionComponent<IVolumeControler> = ({
  audioObject,
}) => {
  const changeVolume = (audio: HTMLAudioElement, value: number): void => {
    audio.volume = value;
  };

  return (
    <div>
      <input
        type='range'
        name='audio-decrement'
        min='1'
        max='100'
        onChange={(event) => {
          const value = Number(event.target.value) / 100;
          changeVolume(audioObject, value);
        }}
      />
    </div>
  );
};

export default VolumeControler;
