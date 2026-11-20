import { Slider } from "@noisekun/ui/components/slider";
import { cn } from "@noisekun/ui/lib/utils";

type Props = {
  className?: string;
  id?: string;
  label: string;
  minValue: number;
  maxValue: number;
  rangeValue: number;
  handleVolume: (volume: number) => void;
  title?: string;
};

/**
 * A slim volume slider: the thumb stays hidden on desktop until the slider
 * is hovered or focused.
 */
export function VolumeControllerSlider({
  className,
  id,
  label,
  minValue,
  maxValue,
  rangeValue,
  handleVolume,
  title,
}: Props) {
  return (
    <Slider
      aria-label={label}
      className={cn(
        "group/slider **:data-[slot=slider-thumb]:bg-foreground **:data-[slot=slider-range]:bg-foreground **:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-thumb]:border-none md:**:data-[slot=slider-thumb]:opacity-0 md:focus-within:**:data-[slot=slider-thumb]:opacity-100 md:hover:**:data-[slot=slider-thumb]:opacity-100",
        className
      )}
      id={id}
      max={maxValue}
      min={minValue}
      // SAFETY: `value` is a single number, so Base UI reports a single number.
      onValueChange={(value) => handleVolume(value as number)}
      title={title}
      value={rangeValue}
    />
  );
}
