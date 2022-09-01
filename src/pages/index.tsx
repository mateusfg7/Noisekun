import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Sound } from '../components/Sound'
import { Footer } from '../components/Footer'

import soundList from '../sounds.json'

const Home: React.FC = () => {
  return (
    <div className="App animate-background-change">
      <Head>
        <title>Noisekun</title>
      </Head>

      <Header />
      <section className="flex justify-center items-center min-h-[85vh] p-14">
        <div className="grid gap-12 grid-cols-1 xs:grid-cols-2 2xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
          {soundList.map(sound => (
            <Sound
              key={sound.name}
              name={sound.name}
              iconFile={sound.iconFile}
              audioFile={sound.audioFile}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
