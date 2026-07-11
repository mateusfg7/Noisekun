'use client'

import React, { useEffect } from 'react'

import { useUserInteractionStore } from '~/stores/user-interaction-store'
import { useThemeStore } from '~/stores/theme-store'

import { useQueryState } from '~/hooks/use-query-state'

import { Header } from '~/components/header'
import { ActionButtons } from '~/components/action-buttons'
import { SoundButton } from '~/components/sound'
import { Footer } from '~/components/footer'
import { InteractionModal } from '~/components/interaction-modal'

import { sounds } from '~/data/sounds'

export default function Home() {
  const currTheme = useThemeStore(set => set.theme)
  const setUserHasInteracted = useUserInteractionStore(
    state => state.setUserHasInteracted
  )

  const [querySounds] = useQueryState('sounds')

  useEffect(() => {
    if (!querySounds.length) setUserHasInteracted(true)
  }, [])

  return (
    <div className={currTheme}>
      <div className="bg-background-image bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="relative bg-background-color">
          <Header />
          <div className="styled-scrollbar h-[90vh] space-y-24 overflow-y-scroll pt-16 md:h-[87vh]">
            <div className="m-auto flex flex-col items-center gap-3 w-7/12 lg:max-w-4xl">
              <ActionButtons />
              <div className="flex flex-wrap gap-12 justify-center">
                {sounds.map(sound => (
                  <SoundButton key={sound.id} sound={sound} />
                ))}
              </div>
            </div>
            <Footer />
            <InteractionModal />
          </div>
        </div>
      </div>
    </div>
  )
}
