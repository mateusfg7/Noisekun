const sleep = (timeInMs: number) =>
  new Promise(resolve => setTimeout(resolve, timeInMs))

interface FadeSoundProps {
  from: number
  to: number
  step?: number
  totalFadeTimeMs: number
  soundRef: React.RefObject<HTMLAudioElement>
  beforeFade?: () => void | undefined
  afterFade?: () => void | undefined
}
export async function fadeSound({
  from,
  to,
  step = 0.01,
  totalFadeTimeMs,
  soundRef,
  beforeFade,
  afterFade
}: FadeSoundProps) {
  if ((from || to) > 1 || (from || to) < 0) {
    console.error(
      'fadeSound | `from` and `to` parameters need to be in 0-1 interval'
    )
    return
  }

  const diff = to - from
  const timeoutInterval = Math.abs(totalFadeTimeMs / (diff / step))

  soundRef.current.volume = from

  {
    beforeFade && beforeFade()
  }

  async function fade() {
    const currVolume = soundRef.current.volume

    if ((to < from && currVolume <= to) || (to > from && currVolume >= to))
      return

    let next = soundRef.current.volume + diff * step

    if (diff > 0) next = Math.min(next, to)
    else next = Math.max(next, to)

    soundRef.current.volume = next

    await sleep(timeoutInterval)
    await fade()
  }
  await fade()

  {
    afterFade && afterFade()
  }
}
