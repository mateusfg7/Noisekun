import React from 'react'

import { Sound } from '../Sound'

import soundList from '../../sounds.json'

import AudiosBlock from './styles'

export const Audios: React.FC = () => {
  return (
    <AudiosBlock>
      {soundList.map(sound => (
        <Sound
          key={sound.name}
          name={sound.name}
          iconFile={sound.iconFile}
          audioFile={sound.audioFile}
        />
      ))}
    </AudiosBlock>
  )
}
