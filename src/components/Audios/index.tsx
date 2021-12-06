import React from 'react'

import { Sound } from '../Sound'
import { IVolumeController } from '../VolumeController'

import AudiosBlock from './styles'

export interface IAudios {
  VolumeController: React.FC<IVolumeController>
  changeStateOfAudio: CallableFunction
}

export const Audios: React.FC<IAudios> = ({
  VolumeController,
  changeStateOfAudio
}) => {
  return (
    <AudiosBlock>
      <Sound
        name="rain"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="storm"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="wind"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="water"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="ocean-waves"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="small-waves"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="forest-ambience"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="leafs"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="fire"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="night"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="coffee"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="fan"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="train"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="air-plane"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="underwater"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
    </AudiosBlock>
  )
}
