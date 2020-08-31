import React, { useState } from 'react';

import { SoundComponent, SoundButton } from './styles';

export default function Sound({
  name,
  changeStateOfAudio,
  VolumeController,
  env,
}: ISound): JSX.Element {
  const icons: { [index: string]: string } = {
    rain: 'icofont-rainy',
    storm: 'icofont-rainy-thunder',
    wind: 'icofont-wind',
    water: 'icofont-water-drop',
    'ocean-waves': 'icofont-wind-waves',
    'small-waves': 'icofont-wave',
    'forest-ambience': 'icofont-tree-alt',
    leafs: 'icofont-leaf',
    fire: 'icofont-fire-burn',
    night: 'icofont-night',
    coffee: 'icofont-coffee-mug',
    fan: 'icofont-headphone',
    train: 'icofont-train-line',
    'air-plane': 'icofont-airplane',
    underwater: 'icofont-swimmer',
  };

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
        <i className={`${icons[name]} icons`} />
      </SoundButton>

      <VolumeController
        audioObject={document.querySelector<HTMLAudioElement>(`#${name}`)}
        id={`${name}-audio-controller`}
      />
    </SoundComponent>
  );
}
