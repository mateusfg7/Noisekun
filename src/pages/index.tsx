import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

import { Header } from '../components/Header'
import { Audios } from '../components/Audios'
import { Footer } from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Head>
        <title>Noisekun</title>
      </Head>

      <Header />
      <section className="main-section audio-section">
        <Audios />
      </section>
      <Footer />
    </div>
  )
}

export default Home
