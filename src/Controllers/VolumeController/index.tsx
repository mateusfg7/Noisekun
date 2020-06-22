import React from "react";

const VolumeControler: React.FunctionComponent<IVolumeControler> = ({
  audioObject,
}) => {
  const changeVolume = (audio: HTMLAudioElement, value: number): void => {
    if (audio) {
      audio.volume = value;
    }
  };

  return (
    <input
      type='range'
      name='audio-decrement'
      className='audio-controller'
      min='1'
      max='100'
      onChange={(event) => {
        const value = Number(event.target.value) / 100;
        changeVolume(audioObject, value);
      }}
    />
  );
};

export default VolumeControler;
