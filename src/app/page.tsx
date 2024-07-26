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
        <div className="bg-background-color relative">
          <Header />
          <div className="styled-scrollbar h-[90vh] space-y-24 overflow-y-scroll pt-16 md:h-[87vh]">
            <div className="m-auto flex w-fit flex-col items-center gap-3">
              <ActionButtons />
              <div className="grid h-fit w-fit grid-cols-1 gap-12 xs:grid-cols-2 2xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
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
