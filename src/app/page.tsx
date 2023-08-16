'use client'

import React from 'react'

import { Header } from '@/components/header'
import { SoundButton } from '@/components/sound'
import { ClearButton } from '@/components/clear-button'
import { Footer } from '@/components/footer'
import { useThemeStore } from '@/stores/theme-store'
import { sounds } from '@/sounds'

import { container } from './styles'

export default function Home() {
  const background = useThemeStore(set => set.theme)

  return (
    <div className={container({ background })}>
      <Header />
      <div className="h-[90vh] space-y-24 overflow-y-scroll pt-16 md:h-[87vh]">
        <div className="m-auto w-fit space-y-3">
          <div className="hidden items-center justify-end px-4 xs:flex">
            <ClearButton />
          </div>
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
