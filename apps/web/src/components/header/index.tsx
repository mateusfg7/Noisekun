import React from 'react'
import Link from 'next/link'

import { ConfigMenu } from '~/components/config-menu'

import { ThemeMenu } from './theme-menu'
import { GlobalVolumeController } from './global-volume-controller'
import { Pomodoro } from './pomodoro'
import { ComboList } from './combo-list'
import { RandomModeButton } from './random-controller'

export const Header: React.FC = () => {
  return (
    <header className="relative flex h-[10vh] items-center justify-between gap-5 px-6 shadow-header transition-all md:h-[13vh]">
      <h1 className="text-2xl font-semibold text-primary-foreground">
        <Link href="/">Noisekun</Link>
      </h1>
      <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
        <Pomodoro />
      </div>
      <div className="right-10 flex items-center gap-3">
        <GlobalVolumeController />
        <RandomModeButton />
        <ThemeMenu />
        <ComboList />
        <ConfigMenu />
      </div>
    </header>
  )
}
