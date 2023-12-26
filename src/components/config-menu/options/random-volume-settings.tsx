import { useThemeStore } from '~/stores/theme-store'
import { settingRow, input } from './styles'

type Props = {
  updateInterval: {
    value: number
    set: (newValue: number) => void
  }
  updateSteps: {
    value: number
    set: (newValue: number) => void
  }
}

export function RandomVolumeSettings({ updateInterval, updateSteps }: Props) {
  const theme = useThemeStore(state => state.theme)

  const MIN_INTERVAL = 10 * 1000 // 10 seconds
  const MAX_INTERVAL = 5 * 60 * 1000 // 5 minutes

  function handleUpdateInterval(intervalInSec: number) {
    const intervalInMs = intervalInSec * 1000

    if (intervalInMs < MIN_INTERVAL) updateInterval.set(MIN_INTERVAL)
    else if (intervalInMs > MAX_INTERVAL) updateInterval.set(MAX_INTERVAL)
    else updateInterval.set(intervalInMs)
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
