'use client'

import React from 'react'

import { Header } from '@/components/Header'
import { Sound } from '@/components/Sound'
import { Footer } from '@/components/Footer'

import { useBackgroundStore } from '@/stores/BackgroundStore'
import soundList from '@/sounds.json'

export default function Home() {
  const background = useBackgroundStore(set => set.background)

  const backgroundClasses = {
    transition: 'animate-background-change',
    dark: 'bg-gray-900',
    'room-and-rain': 'bg-lofi-rain',
    'train-and-rain': 'bg-train-rain',
    waterfall: 'bg-tree',
    static: 'bg-main',
    'camping-fire': 'bg-camping-fire '
  }

  return (
    <div
      className={`bg-fixed bg-no-repeat bg-cover bg-center ${backgroundClasses[background]}`}
    >
      <Header />
      <div className="h-[90vh] md:h-[85vh] overflow-y-scroll">
        <div className="flex justify-center items-center min-h-[85vh] p-14">
          <div className="grid gap-12 grid-cols-1 xs:grid-cols-2 2xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
            {soundList.map(sound => (
              <Sound key={sound.id} soundData={sound} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
