import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

import { Header } from '../components/Header'
import { Sound } from '../components/Sound'
import { Footer } from '../components/Footer'

import { SoundGridLayout } from '../styles/pages/index'

import soundList from '../sounds.json'

const Home: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Head>
        <title>Noisekun</title>
      </Head>

      <Header />
      <section className="main-section audio-section">
        <SoundGridLayout>
          {soundList.map(sound => (
            <Sound
              key={sound.name}
              name={sound.name}
              iconFile={sound.iconFile}
              audioFile={sound.audioFile}
            />
          ))}
        </SoundGridLayout>
      </section>
      <Footer />
    </div>
  )
}

export default Home
