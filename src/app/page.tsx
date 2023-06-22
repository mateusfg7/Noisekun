'use client'

import React from 'react'

import { Header } from '@/components/Header'
import { Sound } from '@/components/Sound'
import { Footer } from '@/components/Footer'

import soundList from '@/sounds.json'
import { useBackgroundStore } from '@/stores/BackgroundStore'

import { Container, Main, SoundContainer, SoundGrid } from '@/styles/pages'

export default function Home() {
  const background = useBackgroundStore(set => set.background)

  return (
    <Container $background={background}>
      <Header />
      <Main>
        <SoundContainer>
          <SoundGrid>
            {soundList.map(sound => (
              <Sound key={sound.id} soundData={sound} />
            ))}
          </SoundGrid>
        </SoundContainer>
        <Footer />
      </Main>
    </Container>
  )
}
