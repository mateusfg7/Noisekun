import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

import { Header } from '../components/Header'
import { Audios } from '../components/Audios'
import { VolumeController } from '../components/VolumeController'
import { Footer } from '../components/Footer'

import changeStateOfAudio from '../functions/changeStateOfAudio'

const Home: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Head>
        <title>Noisekun</title>
      </Head>

      <Header />
      <section className="main-section audio-section">
        <Audios
          VolumeController={VolumeController}
          changeStateOfAudio={changeStateOfAudio}
        />
      </section>
      <Footer />
    </div>
  )
}

export default Home
