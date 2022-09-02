import React, { useState } from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Sound } from '../components/Sound'
import { Footer } from '../components/Footer'

import soundList from '../sounds.json'
import { useBackgroundStore } from '../stores/BackgroundStore'

const Home: React.FC = () => {
  const background = useBackgroundStore(set => set.background)

  return (
    <div
      className={`
    ${background === 'animated' && 'animate-background-change'}
    ${background === 'dark' && 'bg-gray-900'}
    ${
      background === 'lofi-rain' &&
      'bg-lofi-rain bg-fixed bg-no-repeat bg-cover bg-center backdrop-brightness-50'
    }
    ${
      background === 'train-rain' &&
      'bg-train-rain bg-fixed bg-no-repeat bg-cover bg-center backdrop-brightness-50'
    }
    ${
      background === 'tree' &&
      'bg-tree bg-fixed bg-no-repeat bg-cover bg-center backdrop-brightness-50'
    }
    
    `}
    >
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
