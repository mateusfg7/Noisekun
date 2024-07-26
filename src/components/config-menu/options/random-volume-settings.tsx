import { settingRow, input, dot } from './styles'

type Option = {
  value: number
  set: (newValue: number) => void
  wasChanged: () => boolean
}

type Props = {
  updateTransitionTime: Option
  updateInterval: Option
  updateSteps: Option
}

export function RandomVolumeSettings({
  updateInterval,
  updateSteps,
  updateTransitionTime
}: Props) {
  return (
    <div className="space-y-2">
      <h3 className="p-1 text-left opacity-60">Random volume</h3>
      <div className="space-y-1">
        <div className={settingRow()}>
          <span className={dot({ active: updateInterval.wasChanged() })} />

          <label htmlFor="interval" className="flex-1 text-left">
            Update interval <span className="text-sm opacity-50">/s</span>
          </label>
          <input
            type="number"
            id="interval"
            value={updateInterval.value / 1000}
            onChange={e => updateInterval.set(Number(e.target.value) * 1000)}
            className={input()}
          />
        </div>
        <div className={settingRow()}>
          <span
            className={dot({
              active: updateTransitionTime.wasChanged()
            })}
          />
          <label htmlFor="interval" className="flex-1 text-left">
            Transition time <span className="text-sm opacity-50">/s</span>
          </label>
          <input
            type="number"
            id="interval"
            value={updateTransitionTime.value / 1000}
            onChange={e =>
              updateTransitionTime.set(Number(e.target.value) * 1000)
            }
            className={input()}
          />
        </div>
        <div className={settingRow()}>
          <span
            className={dot({
              active: updateSteps.wasChanged()
            })}
          />
          <label htmlFor="steps" className="flex-1 text-left">
            Update steps
          </label>
          <input
            type="number"
            id="steps"
            value={updateSteps.value}
            onChange={e => updateSteps.set(Number(e.target.value))}
            className={input()}
          />
        </div>
      </div>
    </div>
  )
}
