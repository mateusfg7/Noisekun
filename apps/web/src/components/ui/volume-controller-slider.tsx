import type { ComponentProps, CSSProperties } from "react";
import { tv } from "tailwind-variants";

const input = tv({
  base: /*tw:*/ "slider-input h-4 w-full appearance-none rounded-xl bg-primary-foreground/30 bg-gradient-to-r from-primary-foreground to-primary-foreground bg-no-repeat group-hover:cursor-pointer slider-thumb:h-4 slider-thumb:w-4 slider-thumb:appearance-none slider-thumb:rounded-full slider-thumb:border-none slider-thumb:bg-primary-foreground slider-thumb:opacity-0 slider-thumb:ring-white/10 slider-thumb:transition-all slider-thumb:duration-100 slider-thumb:active:ring-4 sm:h-1 slider-thumb:sm:opacity-100 slider-thumb:md:h-2 slider-thumb:md:w-2 slider-thumb:md:group-hover:h-3 slider-thumb:md:group-hover:w-3",
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
