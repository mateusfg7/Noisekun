import React from 'react'
import Link from 'next/link'

import { GlobalVolumeController } from '@/components/global-volume-controller'
import { BackgroundMenu } from '@/components/background-menu'

export const Header: React.FC = () => {
  return (
    <header className="relative flex h-[10vh] items-center justify-between gap-5 px-6 shadow-header md:h-[15vh] md:justify-center">
      <h1 className="text-2xl font-semibold text-white/90">
        <Link href="/">Noisekun</Link>
      </h1>
      <div className="flex items-center gap-3 md:absolute md:right-10">
        <GlobalVolumeController />
        <BackgroundMenu />
      </div>
    </header>
  )
}
