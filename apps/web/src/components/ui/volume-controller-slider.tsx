import type { ComponentProps, CSSProperties } from "react";
import { tv } from "tailwind-variants";

const input = tv({
  base: /*tw:*/ "slider-input h-1 w-full cursor-pointer appearance-none rounded-full bg-primary-foreground/10 bg-gradient-to-r from-primary-foreground to-primary-foreground bg-no-repeat slider-thumb:size-3 slider-thumb:cursor-pointer slider-thumb:appearance-none slider-thumb:rounded-full slider-thumb:border-none slider-thumb:bg-primary-foreground slider-thumb:ring-primary-foreground/20 slider-thumb:transition-all slider-thumb:duration-150 slider-thumb:active:ring-4 slider-thumb:md:size-2 slider-thumb:md:opacity-0 slider-thumb:md:group-focus-within:opacity-100 slider-thumb:md:group-hover:size-3 slider-thumb:md:group-hover:opacity-100",
});

type Props = {
  minValue: number;
  maxValue: number;
  rangeValue: number;
  handleVolume: (volume: number) => void;
};

export function VolumeControllerSlider({
  className,
  minValue,
  maxValue,
  rangeValue,
  handleVolume,
  ...props
}: Props & ComponentProps<"input">) {
  // The filled part of the track is sized by `.slider-input` in global.css.
  const fillStyle: CSSProperties & { "--slider-fill": string } = {
    "--slider-fill": `${(rangeValue * 100) / maxValue}%`,
  };

  return (
    <input
      {...props}
      className={input({ className })}
      max={maxValue}
      min={minValue}
      onChange={(event) => handleVolume(Number(event.target.value))}
      style={fillStyle}
      type="range"
      value={rangeValue}
    />
  );
}
