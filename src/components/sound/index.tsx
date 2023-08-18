import React, { useEffect, useRef, useState } from 'react'

import type { Sound } from '@/sounds'

import { useThemeStore } from '@/stores/theme-store'
import { useGlobalVolumeStore } from '@/stores/global-volume-store'
import { PomodoroStatus, usePomodoroStore } from '@/stores/pomodoro-store'
import { SoundState, useSoundsStateStore } from '@/stores/sounds-state-store'

import { VolumeController } from './volume-controller'
import { fadeSound } from './fade-sound'
import { icon, iconContainer } from './styles'

interface SoundButtonProps {
  sound: Sound
}

export const SoundButton: React.FC<SoundButtonProps> = ({ sound }) => {
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)
  const pomodoroStatus = usePomodoroStore(state => state.pomodoroStatus)
  const theme = useThemeStore(set => set.theme)
  const soundsStore = useSoundsStateStore(state => state.sounds)
  const getSoundState = useSoundsStateStore(state => state.getSound)
  const setSoundState = useSoundsStateStore(state => state.setSound)

  const [localSoundState, setLocalSoundState] = useState<SoundState>({
    active: false,
    id: sound.id,
    volume: 1
  })
  const [isUpdatingSoundState, setIsUpdatingSoundState] = useState(false)

  const soundRef = useRef<HTMLAudioElement>()

  async function toggleSoundState() {
    const soundState = getSoundState(sound.id)

    const currSoundVolume = soundState.volume * globalVolume

    if (soundState.active) {
      // Play sound
      fadeSound({
        soundRef,
        from: 0,
        to: currSoundVolume,
        totalFadeTimeMs: 200,
        beforeFade() {
          soundRef.current.play()
        }
      })
    } else {
      // Pause sound
      fadeSound({
        soundRef,
        from: currSoundVolume,
        to: 0,
        totalFadeTimeMs: 200,
        afterFade() {
          soundRef.current.pause()
        }
      })
    }

    setIsUpdatingSoundState(false)
    setLocalSoundState(soundState)
  }

  function updateSoundVolume() {
    const soundState = getSoundState(sound.id)

    soundRef.current.volume = soundState.volume * globalVolume
    setLocalSoundState(soundState)
  }

  useEffect(() => {
    const soundState = getSoundState(sound.id)

    let initialState = {
      id: sound.id,
      active: false,
      volume: 1
    }

    if (soundState) initialState = { ...soundState, active: false }

    setSoundState(initialState)
    setLocalSoundState(initialState)
  }, [])

  useEffect(() => {
    const soundState = getSoundState(sound.id)

    if (!soundState || !localSoundState) return

    if (soundState.volume !== localSoundState.volume) updateSoundVolume()
    if (soundState.active !== localSoundState.active) toggleSoundState()
  }, [soundsStore])

  useEffect(() => {
    if (!getSoundState(sound.id).active) return

    switch (pomodoroStatus) {
      case PomodoroStatus.ticking:
      case PomodoroStatus.idle:
        if (soundRef.current.volume === 0) {
          fadeSound({
            soundRef,
            from: 0,
            to: getSoundState(sound.id).volume * globalVolume,
            totalFadeTimeMs: 200
          })
        }
        break

      case PomodoroStatus.stopped:
        if (soundRef.current.volume > 0) {
          fadeSound({
            soundRef,
            from: soundRef.current.volume,
            to: 0,
            totalFadeTimeMs: 200
          })
        }
        break
    }
  }, [pomodoroStatus])

  useEffect(() => {
    if (!isUpdatingSoundState) {
      soundRef.current.volume = getSoundState(sound.id).volume * globalVolume
    }
  }, [globalVolume])

  useEffect(() => {
    if (!isUpdatingSoundState) return

    setSoundState({ ...localSoundState, active: !localSoundState.active })
  }, [isUpdatingSoundState])

  const Icon = sound.icon

  return (
    <div
      title={sound.title}
      className="flex h-24 w-24 flex-col items-center justify-center"
    >
      <audio ref={soundRef} preload="auto" loop>
        <source src={sound.file.url} type={sound.file.type} />
      </audio>
      <button
        umami-data-event={sound.title}
        className={iconContainer({ active: localSoundState.active, theme })}
        onClick={() => setIsUpdatingSoundState(true)}
      >
        <Icon className={icon()} />
      </button>
      <VolumeController
        isActive={localSoundState.active}
        soundName={sound.title}
        soundId={sound.id}
        handleSoundVolume={volume =>
          setSoundState({ ...localSoundState, volume })
        }
      />
    </div>
  )
}
