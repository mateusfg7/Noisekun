import React from 'react'
import Link from 'next/link'

import { GlobalVolumeController } from '@/components/global-volume-controller'
import { BackgroundMenu } from '@/components/background-menu'

export const Header: React.FC = () => {
  return (
    <header className="left-0 right-0 top-0 flex h-[10vh] items-center justify-between gap-5 px-6 shadow-header transition-all md:h-[13vh]">
      <div className="hidden md:block" />
      <h1 className="text-2xl font-semibold text-white/90">
        <Link href="/">Noisekun</Link>
      </h1>
      <div className="flex items-center gap-3">
        <GlobalVolumeController />
        <BackgroundMenu />
      </div>
    </header>
  )
}
