import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Sound } from '../components/Sound'
import { Footer } from '../components/Footer'

import soundList from '../sounds.json'
import { useBackgroundStore } from '../stores/BackgroundStore'

import {
  Container,
  Main,
  SoundContainer,
  SoundGrid
} from '../styles/pages/index'

const Home: React.FC = () => {
  const background = useBackgroundStore(set => set.background)

  return (
    <Container $background={background}>
      <Head>
        <title>Noisekun</title>
      </Head>

      <Header />
      <Main>
        <SoundContainer>
          <SoundGrid>
            {soundList.map(sound => (
              <Sound
                key={sound.name}
                name={sound.name}
                iconFile={sound.iconFile}
                audioFile={sound.audioFile}
              />
            ))}
          </SoundGrid>
        </SoundContainer>
        <Footer />
      </Main>
    </Container>
  )
}

export default Home
