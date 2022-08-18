import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="App">
      <Head>
        <title>Noisekun</title>
      </Head>

      <Header />
      <section className="flex justify-center items-center min-h-[85vh] p-14">
        <h1 className="font-normal text-white/90 text-5xl">You are offline!</h1>
      </section>
      <Footer />
    </div>
  )
}

export default Home
