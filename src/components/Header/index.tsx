import React, { useState } from 'react'
import Link from 'next/link'

import { FiVolume2, FiVolume1, FiVolume } from 'react-icons/fi'

import { useGlobalVolumeStore } from '../../stores/GlobalVolumeStore'

import { GlobalVolumeController } from '../GlobalVolumeController'
import { BackgroundMenu } from '../BackgroundMenu'

export const Header: React.FC = () => {
  const [isShowing, setIsShowing] = useState(false)

  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  return (
    <header className="relative flex justify-between md:justify-center items-center gap-5 px-6 h-[15vh] md:shadow-header">
      <h1 className="font-semibold text-2xl">
        <Link href="/">
          <a className="umami--click--title text-white/90">Noisekun</a>
        </Link>
      </h1>
      <div className="md:absolute md:right-10 flex gap-3 items-center">
        <div
          className="flex gap-3 items-center opacity-90 hover:opacity-100"
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
        >
          <div className={`${!isShowing && 'hidden'} w-28`}>
            <GlobalVolumeController />
          </div>
          <div className="cursor-pointer">
            {globalVolume >= 0.5 && <FiVolume2 size={25} />}
            {globalVolume >= 0.1 && globalVolume < 0.5 && (
              <FiVolume1 size={25} />
            )}
            {globalVolume < 0.1 && <FiVolume size={25} />}
          </div>
        </div>
        <BackgroundMenu />
      </div>
    </header>
  )
}
