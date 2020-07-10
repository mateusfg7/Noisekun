import React, { useState } from "react";

import "./style.css";

export default function Sound({
  name,
  changeStateOfAudio,
  VolumeController,
  env,
}: ISound) {
  const [state, setState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop id={name}>
        <source src={`${env.HOST}/${name}`} type='audio/mp3' />
      </audio>

      <div
        className='sound-button'
        id={`${name}_button`}
        onClick={() => {
          const audio = document.querySelector<HTMLAudioElement>(`#${name}`);
          const button = document.getElementById(`${name}_button`);
          const audioController = document.getElementById(
            `${name}_audio_controller`
          );
          changeStateOfAudio(audio, state, setState, button, audioController);
        }}
      >
        <img src={`/Noisekun/icons/${name}.svg`} alt={name} />
      </div>

      <VolumeController
        audioObject={document.querySelector<HTMLAudioElement>(`#${name}`)}
        id={`${name}_audio_controller`}
      />
    </div>
  );
}
