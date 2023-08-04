'use client'

import React from 'react'

import { Header } from '@/components/header'
import { Sound } from '@/components/sound'
import { Footer } from '@/components/footer'

import { useBackgroundStore } from '@/stores/BackgroundStore'
import soundList from '@/sounds.json'
import { container } from './styles'

export default function Home() {
  const background = useBackgroundStore(set => set.background)

  return (
    <div className={container({ background })}>
      <Header />
      <div className="h-[90vh] overflow-y-scroll md:h-[85vh]">
        <div className="flex min-h-[85vh] items-center justify-center p-14">
          <div className="grid grid-cols-1 gap-12 xs:grid-cols-2 2xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
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
