import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Message } from '../styles/pages/offline'

const Home: React.FC = () => {
  return (
    <div className="App">
      <Head>
        <title>Noisekun</title>
      </Head>

      <Header />
      <section className="main-section audio-section">
        <Message>You are offline!</Message>
      </section>
      <Footer />
    </div>
  )
}

export default Home
