import { useEffect, useRef, useState } from 'react'
import { FiPause, FiPlay, FiRotateCw } from 'react-icons/fi'

import { PomodoroStatus, usePomodoroStore } from '~/stores/pomodoro-store'
import { useThemeStore } from '~/stores/theme-store'

import { padZero } from '~/utils/pad-zero'

import { ConfigModal } from './config-modal'
import { container, controlButton } from './styles'

export function Pomodoro() {
  const setPomodoroStatus = usePomodoroStore(state => state.setPomodoroStatus)
  const theme = useThemeStore(state => state.theme)

  const [defaultTimeInSec, setDefaultTimeInSec] = useState(25 * 60)
  const [remainingTime, setRemainingTime] = useState(defaultTimeInSec)
  const [isTicking, setIsTicking] = useState(false)
  const [alarmIsRinging, setAlarmIsRinging] = useState(false)
  const [isLoadingStorage, setIsLoadingStorage] = useState(true)

  const alarmRef = useRef<HTMLAudioElement>()

  const toggleAlarm = () => {
    if (alarmIsRinging) alarmRef.current.pause()
    else alarmRef.current.play()

    setAlarmIsRinging(!alarmIsRinging)
  }

  function setMinutes(minutes: number) {
    const nextTotalSeconds = minutes >= 99 ? 99 * 60 : minutes * 60

    setDefaultTimeInSec(nextTotalSeconds)
    setRemainingTime(nextTotalSeconds)
    localStorage.setItem('default-timer-minutes', String(nextTotalSeconds / 60))

    setPomodoroStatus(PomodoroStatus.idle)
  }

  const getMinutes = (totalSeconds: number) =>
    padZero(Math.floor(totalSeconds / 60))
  const getRemainderSeconds = (totalSeconds: number) =>
    padZero(totalSeconds % 60)

  const resetTimer = () => {
    setRemainingTime(defaultTimeInSec)
    setPomodoroStatus(PomodoroStatus.idle)

    if (alarmIsRinging) toggleAlarm()
  }

  const handleToggle = () => {
    if (remainingTime === 0) {
      setRemainingTime(defaultTimeInSec)
    }

    setIsTicking(!isTicking)
    setPomodoroStatus(
      !isTicking ? PomodoroStatus.ticking : PomodoroStatus.stopped
    )

    if (alarmIsRinging) toggleAlarm()
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isTicking) {
        clearInterval(intervalId)
        return
      }

      const nextRemaining = remainingTime - 1
      setRemainingTime(nextRemaining)
      if (nextRemaining === 0) {
        setIsTicking(false)
        setPomodoroStatus(PomodoroStatus.stopped)
        if (!alarmIsRinging) toggleAlarm()
        clearInterval(intervalId)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isTicking, remainingTime])

  useEffect(() => {
    const defaultTimerStored = localStorage.getItem('default-timer-minutes')
    if (+defaultTimerStored) {
      setMinutes(+defaultTimerStored)
    }

    setIsLoadingStorage(false)
  }, [])

  return (
    <div className={container({ theme })}>
      <audio ref={alarmRef} preload="auto" loop>
        <source src="/sounds/alarm.ogg" type="audio/ogg" />
      </audio>

      <button
        title="Reset Pomodoro timer"
        disabled={isLoadingStorage}
        onClick={resetTimer}
        className={controlButton({ theme, isLoading: isLoadingStorage })}
        data-umami-event="Reset pomodoro timer"
      >
        <FiRotateCw />
      </button>

      <ConfigModal
        minutes={getMinutes(defaultTimeInSec)}
        isLoading={isLoadingStorage}
        setMinutes={setMinutes}
        displayMinutes={isLoadingStorage ? '-' : getMinutes(remainingTime)}
        displaySeconds={
          isLoadingStorage ? '-' : getRemainderSeconds(remainingTime)
        }
      />

      <button
        title="Toggle Pomodoro timer"
        onClick={handleToggle}
        disabled={isLoadingStorage}
        className={controlButton({ theme, isLoading: isLoadingStorage })}
        data-umami-event="Play/pause pomodoro timer"
      >
        {isTicking ? <FiPause /> : <FiPlay />}
      </button>
    </div>
  )
}
