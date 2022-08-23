import React, { useState } from 'react'
import {
  SpeakerSimpleHigh,
  SpeakerSimpleLow,
  SpeakerSimpleNone
} from 'phosphor-react'

import { useGlobalVolumeStore } from '../../stores/GlobalVolumeStore'

import { GlobalVolumeController } from '../GlobalVolumeController'

export const Header: React.FC = () => {
  const [isShowing, setIsShowing] = useState(false)

  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)

  return (
    <header className="relative flex justify-between md:justify-center items-center gap-5 px-6 h-[15vh] bg-[rgba(255, 255, 255, 0.1)] md:shadow-header">
      <h1 className="font-semibold text-2xl">
        <a href="/" className="umami--click--title text-white/90">
          Noisekun
        </a>
      </h1>
      <div
        className="md:absolute md:right-10 flex gap-3 items-center opacity-90 hover:opacity-100"
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <div className={!isShowing && 'hidden'}>
          <GlobalVolumeController />
        </div>
        <div className="cursor-pointer">
          {globalVolume >= 0.5 && <SpeakerSimpleHigh size={25} />}
          {globalVolume >= 0.1 && globalVolume < 0.5 && (
            <SpeakerSimpleLow size={25} />
          )}
          {globalVolume < 0.1 && <SpeakerSimpleNone size={25} />}
        </div>
      </div>
    </header>
  )
}
