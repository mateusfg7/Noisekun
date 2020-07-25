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
      <audio loop preload="true" id={name}>
        <source src={`${env.HOST}/webm/${name}`} type='audio/webm' />
        <source src={`${env.HOST}/mp3/${name}`} type='audio/mp3' />
      </audio>

      <div
        className='sound-button'
        id={`${name}-button`}
        onClick={() => {
          const audio = document.querySelector<HTMLAudioElement>(`#${name}`);
          const button = document.getElementById(`${name}-button`);
          const audioController = document.getElementById(
            `${name}-audio-controller`
          );
          changeStateOfAudio(audio, state, setState, button, audioController);
        }}
      >
        <img src={`/Noisekun/icons/${name}.svg`} alt={name} />
      </div>

      <VolumeController
        audioObject={document.querySelector<HTMLAudioElement>(`#${name}`)}
        id={`${name}-audio-controller`}
      />
    </div>
  );
}
