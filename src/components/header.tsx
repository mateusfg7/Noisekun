import React from 'react'
import Link from 'next/link'

import { GlobalVolumeController } from '@/components/global-volume-controller'
import { BackgroundMenu } from '@/components/background-menu'

export const Header: React.FC = () => {
  return (
    <header className="relative flex gap-5 justify-between md:justify-center items-center px-6 h-[10vh] md:h-[15vh] shadow-header">
      <h1 className="font-semibold text-2xl text-white/90">
        <Link href="/">Noisekun</Link>
      </h1>
      <div className="md:absolute md:right-10 flex gap-3 items-center">
        <GlobalVolumeController />
        <BackgroundMenu />
      </div>
    </header>
  )
}
