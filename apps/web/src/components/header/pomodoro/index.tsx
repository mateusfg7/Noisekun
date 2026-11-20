import { useCallback, useEffect, useRef, useState } from "react";
import { FiPause, FiPlay, FiRotateCw } from "react-icons/fi";

import { useIsClient } from "~/hooks/use-is-client";
import { PomodoroStatus, usePomodoroStore } from "~/stores/pomodoro-store";
import { padZero } from "~/utils/pad-zero";

import { ConfigModal } from "./config-modal";

const STORAGE_KEY = "default-timer-minutes";
const DEFAULT_MINUTES = 25;
const MAX_MINUTES = 99;

const toTotalSeconds = (minutes: number) => Math.min(minutes, MAX_MINUTES) * 60;

const getMinutes = (totalSeconds: number) =>
  padZero(Math.floor(totalSeconds / 60));

const getRemainderSeconds = (totalSeconds: number) =>
  padZero(totalSeconds % 60);

export function Pomodoro() {
  const setPomodoroStatus = usePomodoroStore(
    (state) => state.setPomodoroStatus
  );

  // The saved duration lives in localStorage, which the server can't read:
  // show a placeholder until hydration, then read it during render.
  const isClient = useIsClient();
  const isLoadingStorage = !isClient;

  const storedMinutes = isClient
    ? Number(localStorage.getItem(STORAGE_KEY))
    : 0;

  // `null` means "not set yet": fall back to the stored/default duration.
  const [customTimeInSec, setCustomTimeInSec] = useState<number | null>(null);

  const [remainingOverride, setRemainingOverride] = useState<number | null>(
    null
  );

  const [isTicking, setIsTicking] = useState(false);
  // Only read in event handlers, so a ref avoids needless re-renders.
  const alarmIsRingingRef = useRef(false);

  const defaultTimeInSec =
    customTimeInSec ?? toTotalSeconds(storedMinutes || DEFAULT_MINUTES);

  const remainingTime = remainingOverride ?? defaultTimeInSec;

  const alarmRef = useRef<HTMLAudioElement>(null);

  const startAlarm = useCallback(() => {
    alarmRef.current?.play();
    alarmIsRingingRef.current = true;
  }, []);

  const stopAlarm = () => {
    alarmRef.current?.pause();
    alarmIsRingingRef.current = false;
  };

  function setMinutes(minutes: number) {
    const nextTotalSeconds = toTotalSeconds(minutes);

    setCustomTimeInSec(nextTotalSeconds);
    setRemainingOverride(null);
    localStorage.setItem(STORAGE_KEY, String(nextTotalSeconds / 60));

    setPomodoroStatus(PomodoroStatus.idle);
  }

  const resetTimer = () => {
    setRemainingOverride(null);
    setPomodoroStatus(PomodoroStatus.idle);

    if (alarmIsRingingRef.current) {
      stopAlarm();
    }
  };

  const handleToggle = () => {
    if (remainingTime === 0) {
      setRemainingOverride(null);
    }

    setIsTicking(!isTicking);
    setPomodoroStatus(
      isTicking ? PomodoroStatus.stopped : PomodoroStatus.ticking
    );

    if (alarmIsRingingRef.current) {
      stopAlarm();
    }
  };

  useEffect(() => {
    if (!isTicking) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const nextRemaining = remainingTime - 1;
      setRemainingOverride(nextRemaining);

      if (nextRemaining === 0) {
        setIsTicking(false);
        setPomodoroStatus(PomodoroStatus.stopped);
        startAlarm();
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [isTicking, remainingTime, setPomodoroStatus, startAlarm]);

  return (
    <div className="flex items-center gap-1 leading-none">
      <audio loop preload="auto" ref={alarmRef}>
        <source src="/sounds/alarm.ogg" type="audio/ogg" />
        <track kind="captions" />
      </audio>

      <button
        className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-foreground/10 text-base text-primary-foreground transition-colors hover:bg-primary-foreground/30 disabled:hover:bg-primary-foreground/10 data-[is-loading='true']:animate-pulse data-[is-loading='true']:cursor-wait"
        data-is-loading={isLoadingStorage}
        data-umami-event="Reset pomodoro timer"
        disabled={isLoadingStorage}
        onClick={resetTimer}
        title="Reset Pomodoro timer"
        type="button"
      >
        <FiRotateCw />
      </button>

      <ConfigModal
        displayMinutes={isLoadingStorage ? "-" : getMinutes(remainingTime)}
        displaySeconds={
          isLoadingStorage ? "-" : getRemainderSeconds(remainingTime)
        }
        isLoading={isLoadingStorage}
        minutes={getMinutes(defaultTimeInSec)}
        setMinutes={setMinutes}
      />

      <button
        className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-foreground/10 text-base text-primary-foreground transition-colors hover:bg-primary-foreground/30 disabled:hover:bg-primary-foreground/10 data-[is-loading='true']:animate-pulse data-[is-loading='true']:cursor-wait"
        data-is-loading={isLoadingStorage}
        data-umami-event="Play/pause pomodoro timer"
        disabled={isLoadingStorage}
        onClick={handleToggle}
        title="Toggle Pomodoro timer"
        type="button"
      >
        {isTicking ? <FiPause /> : <FiPlay />}
      </button>
    </div>
  );
}
