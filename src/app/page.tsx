'use client'

import React from 'react'

import { Header } from '@/components/header'
import { SoundButton } from '@/components/sound'
import { ClearButton } from '@/components/clear-button'
import { Footer } from '@/components/footer'
import { useThemeStore } from '@/stores/theme-store'
import { SaveComboButton } from '@/components/save-combo-button'
import { sounds } from '@/sounds'

import { container } from './styles'

export default function Home() {
  const background = useThemeStore(set => set.theme)

  return (
    <div className={container({ background })}>
      <Header />
      <div className="styled-scrollbar h-[90vh] space-y-24 overflow-y-scroll pt-16 md:h-[87vh]">
        <div className="m-auto flex w-fit flex-col items-center gap-3">
          <div className="hidden w-full items-center justify-end gap-2 px-4 xs:flex">
            <SaveComboButton />
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
