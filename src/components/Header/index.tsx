import React from 'react'
import Link from 'next/link'

import { GlobalVolumeController } from '../GlobalVolumeController'
import { BackgroundMenu } from '../BackgroundMenu'

export const Header: React.FC = () => {
  return (
    <header className="relative flex justify-between md:justify-center items-center gap-5 px-6 h-[15vh] md:shadow-header">
      <h1 className="font-semibold text-2xl">
        <Link href="/">
          <a className="umami--click--title text-white/90">Noisekun</a>
        </Link>
      </h1>
      <div className="md:absolute md:right-10 flex gap-3 items-center">
        <GlobalVolumeController />
        <BackgroundMenu />
      </div>
    </header>
  )
}
