import React from 'react'

import { Sound } from '../Sound'

import AudiosBlock from './styles'

export const Audios: React.FC = () => {
  return (
    <AudiosBlock>
      <Sound name="rain" />
      <Sound name="storm" />
      <Sound name="wind" />
      <Sound name="drops" />
      <Sound name="waves" />
      <Sound name="water" />
      <Sound name="birds-tree" />
      <Sound name="leafs" />
      <Sound name="fire" />
      <Sound name="night" />
      <Sound name="coffee" />
      <Sound name="noise-block" />
      <Sound name="train" />
      <Sound name="air-plane" />
      <Sound name="underwater" />
    </AudiosBlock>
  )
}
