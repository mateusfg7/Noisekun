import React from 'react'

import { Sound } from '../Sound'

import AudiosBlock from './styles'
export const Audios: React.FC = () => {
  return (
    <AudiosBlock>
      <Sound name="rain" />
      <Sound name="storm" />
      <Sound name="wind" />
      <Sound name="water" />
      <Sound name="ocean-waves" />
      <Sound name="small-waves" />
      <Sound name="forest-ambience" />
      <Sound name="leafs" />
      <Sound name="fire" />
      <Sound name="night" />
      <Sound name="coffee" />
      <Sound name="fan" />
      <Sound name="train" />
      <Sound name="air-plane" />
      <Sound name="underwater" />
    </AudiosBlock>
  )
}
