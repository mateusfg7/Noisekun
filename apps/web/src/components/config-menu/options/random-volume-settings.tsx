import { dot, input, settingRow } from "./styles";

type Option = {
  value: number;
  set: (newValue: number) => void;
  wasChanged: () => boolean;
};

type Props = {
  updateTransitionTime: Option;
  updateInterval: Option;
  updateSteps: Option;
};

export function RandomVolumeSettings({
  updateInterval,
  updateSteps,
  updateTransitionTime,
}: Props) {
  return (
    <div className="space-y-2">
      <h3 className="p-1 text-left opacity-60">Random volume</h3>
      <div className="space-y-1">
        <div className={settingRow()}>
          <span className={dot({ active: updateInterval.wasChanged() })} />

          <label className="flex-1 text-left" htmlFor="interval">
            Update interval <span className="text-sm opacity-50">/s</span>
          </label>
          <input
            className={input()}
            id="interval"
            onChange={(e) => updateInterval.set(Number(e.target.value) * 1000)}
            type="number"
            value={updateInterval.value / 1000}
          />
        </div>
        <div className={settingRow()}>
          <span
            className={dot({
              active: updateTransitionTime.wasChanged(),
            })}
          />
          <label className="flex-1 text-left" htmlFor="interval">
            Transition time <span className="text-sm opacity-50">/s</span>
          </label>
          <input
            className={input()}
            id="interval"
            onChange={(e) =>
              updateTransitionTime.set(Number(e.target.value) * 1000)
            }
            type="number"
            value={updateTransitionTime.value / 1000}
          />
        </div>
        <div className={settingRow()}>
          <span
            className={dot({
              active: updateSteps.wasChanged(),
            })}
          />
          <label className="flex-1 text-left" htmlFor="steps">
            Update steps
          </label>
          <input
            className={input()}
            id="steps"
            onChange={(e) => updateSteps.set(Number(e.target.value))}
            type="number"
            value={updateSteps.value}
          />
        </div>
      </div>
    </div>
  );
}
