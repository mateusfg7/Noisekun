import React, { useState } from 'react';

import { SoundComponent, SoundButton } from './styles';

export default function Sound({
  name,
  changeStateOfAudio,
  VolumeController,
  env,
}: ISound): JSX.Element {
  const [state, setState] = useState(false);

  return (
    <SoundComponent>
      <audio loop preload="true" id={name}>
        <source src={`${env.HOST}/webm/${name}`} type="audio/webm" />
        <source src={`${env.HOST}/mp3/${name}`} type="audio/mp3" />
      </audio>

      <SoundButton
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
      </SoundButton>

      <VolumeController
        audioObject={document.querySelector<HTMLAudioElement>(`#${name}`)}
        id={`${name}-audio-controller`}
      />
    </SoundComponent>
  );
}
