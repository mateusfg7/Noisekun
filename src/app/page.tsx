'use client'

import React from 'react'

import { Header } from '@/components/header'
import { SoundButton } from '@/components/sound'
import { Footer } from '@/components/footer'
import { useThemeStore } from '@/stores/theme-store'
import { sounds } from '@/sounds'

import { container } from './styles'

export default function Home() {
  const background = useThemeStore(set => set.theme)

  return (
    <div className={container({ background })}>
      <Header />
      <div className="h-[90vh] overflow-y-scroll md:h-[87vh]">
        <div className="m-auto flex w-full items-center justify-center pb-24 pt-16">
          <div className="grid h-fit w-fit grid-cols-1 gap-12 xs:grid-cols-2 2xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
            {sounds.map(sound => (
              <SoundButton key={sound.id} sound={sound} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
