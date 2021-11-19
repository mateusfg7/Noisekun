import React from 'react'

import { ISound } from '../Sound'
import { IVolumeController } from '../VolumeController'

import AudiosBlock from './styles'

export interface IAudios {
  Sound: React.FC<ISound>;
  VolumeController: React.FC<IVolumeController>;
  changeStateOfAudio: CallableFunction;
  env: string;
}

export const Audios: React.FC<IAudios> = ({
  Sound,
  VolumeController,
  changeStateOfAudio,
  env
}) => {
  return (
    <AudiosBlock>
      <Sound
        name="rain"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="storm"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="wind"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="water"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="ocean-waves"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="small-waves"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="forest-ambience"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="leafs"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="fire"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="night"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="coffee"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="fan"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="train"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="air-plane"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name="underwater"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
    </AudiosBlock>
  )
}
