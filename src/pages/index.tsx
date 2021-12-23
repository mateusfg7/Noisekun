import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

import { Header } from '../components/Header'
import { Sound } from '../components/Sound'
import { Footer } from '../components/Footer'

import { AudiosBlock } from '../styles/pages/index'

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
      </section>
      <Footer />
    </div>
  )
}

export default Home
