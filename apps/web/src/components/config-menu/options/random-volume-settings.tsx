import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@noisekun/ui/components/field";
import { Input } from "@noisekun/ui/components/input";
import { cn } from "@noisekun/ui/lib/utils";

type Option = {
  value: number;
  set: (newValue: number) => void;
  wasChanged: boolean;
};

type Props = {
  updateTransitionTime: Option;
  updateInterval: Option;
  updateSteps: Option;
};

type SettingProps = {
  id: string;
  label: string;
  unit?: string;
  option: Option;
  /** Displayed value = stored value / scale. */
  scale?: number;
};

function Setting({ id, label, unit, option, scale = 1 }: SettingProps) {
  return (
    <Field orientation="horizontal">
      <span
        aria-hidden="true"
        className={cn(
          "bg-foreground size-1.5 shrink-0 rounded-full opacity-0 transition-opacity",
          option.wasChanged && "opacity-100"
        )}
      />
      <FieldLabel className="flex-1" htmlFor={id}>
        {label}
        {unit ? <span className="text-muted-foreground">{unit}</span> : null}
      </FieldLabel>
      <Input
        className="w-20 text-center"
        id={id}
        min={0}
        onChange={(event) => option.set(Number(event.target.value) * scale)}
        type="number"
        value={option.value / scale}
      />
    </Field>
  );
}

export function RandomVolumeSettings({
  updateInterval,
  updateSteps,
  updateTransitionTime,
}: Props) {
  return (
    <FieldSet>
      <FieldLegend variant="label">Random volume</FieldLegend>
      <FieldGroup>
        <Setting
          id="interval"
          label="Update interval"
          option={updateInterval}
          scale={1000}
          unit="/s"
        />
        <Setting
          id="transition-time"
          label="Transition time"
          option={updateTransitionTime}
          scale={1000}
          unit="/s"
        />
        <Setting id="steps" label="Update steps" option={updateSteps} />
      </FieldGroup>
    </FieldSet>
  );
}
