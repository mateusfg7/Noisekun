import React from 'react'
import Link from 'next/link'

import { useThemeStore } from '@/stores/theme-store'
import { ThemeMenu } from './theme-menu'
import { GlobalVolumeController } from './global-volume-controller'
import { title } from './styles'

export const Header: React.FC = () => {
  const theme = useThemeStore(set => set.theme)

  return (
    <header className="relative flex h-[10vh] items-center justify-between gap-5 px-6 shadow-header transition-all md:h-[13vh] md:justify-center">
      <h1 className={title({ theme })}>
        <Link href="/">Noisekun</Link>
      </h1>
      <div className="right-10 flex items-center gap-3 md:absolute">
        <GlobalVolumeController />
        <ThemeMenu />
      </div>
    </header>
  )
}
