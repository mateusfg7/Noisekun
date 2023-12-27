import { useThemeStore } from '~/stores/theme-store'
import { settingRow, input } from './styles'

type Props = {
  updateTransitionTime: {
    value: number
    set: (newValue: number) => void
  }
  updateInterval: {
    value: number
    set: (newValue: number) => void
  }
  updateSteps: {
    value: number
    set: (newValue: number) => void
  }
}

export function RandomVolumeSettings({
  updateInterval,
  updateSteps,
  updateTransitionTime
}: Props) {
  const theme = useThemeStore(state => state.theme)

  function handleUpdateInterval(intervalInSec: number) {
    const intervalInMs = intervalInSec * 1000

    const MIN_INTERVAL = 10 * 1000 // 10 seconds
    const MAX_INTERVAL = 5 * 60 * 1000 // 5 minutes

    updateInterval.set(
      Math.min(Math.max(intervalInMs, MIN_INTERVAL), MAX_INTERVAL)
    )
  }

  function handleTransitionTime(transitionTimeInSec: number) {
    const transitionTimeInMs = transitionTimeInSec * 1000

    const MAX_TRANSITION_TIME = updateInterval.value - 1000
    const MIN_TRANSITION_TIME = 1000 // 1 second

    updateTransitionTime.set(
      Math.min(
        Math.max(transitionTimeInMs, MIN_TRANSITION_TIME),
        MAX_TRANSITION_TIME
      )
    )
  }

  return (
    <div className="space-y-2">
      <h3 className="p-1 text-left opacity-60">Random volume</h3>
      <div className="space-y-1">
        <div className={settingRow({ theme })}>
          <label htmlFor="interval" className="flex-1 text-left">
            Update interval <span className="text-sm opacity-50">/s</span>
          </label>
          <input
            type="number"
            id="interval"
            value={updateInterval.value / 1000}
            onChange={e => handleUpdateInterval(Number(e.target.value))}
            className={input({ theme })}
          />
        </div>
        <div className={settingRow({ theme })}>
          <label htmlFor="interval" className="flex-1 text-left">
            Transition time <span className="text-sm opacity-50">/s</span>
          </label>
          <input
            type="number"
            id="interval"
            value={updateTransitionTime.value / 1000}
            onChange={e => handleTransitionTime(Number(e.target.value))}
            className={input({ theme })}
          />
        </div>
        <div className={settingRow({ theme })}>
          <label htmlFor="steps" className="flex-1 text-left">
            Update steps
          </label>
          <input
            type="number"
            id="steps"
            value={updateSteps.value}
            onChange={e => updateSteps.set(Number(e.target.value))}
            className={input({ theme })}
          />
        </div>
      </div>
    </div>
  )
}
