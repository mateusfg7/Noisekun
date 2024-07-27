import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const input = tv({
  base: /*tw:*/ 'slider-input bg-gradient-to-r bg-no-repeat h-4 w-full appearance-none rounded-xl group-hover:cursor-pointer sm:h-1 slider-thumb:h-4 slider-thumb:w-4 slider-thumb:appearance-none slider-thumb:rounded-full slider-thumb:border-none slider-thumb:opacity-0 slider-thumb:ring-white/10 slider-thumb:transition-all slider-thumb:duration-100 slider-thumb:active:ring-4 slider-thumb:sm:opacity-100 slider-thumb:md:h-2 slider-thumb:md:w-2 slider-thumb:md:group-hover:h-3 slider-thumb:md:group-hover:w-3 bg-primary-foreground/30 from-primary-foreground to-primary-foreground slider-thumb:bg-primary-foreground'
})

type Props = {
  minValue: number
  maxValue: number
  rangeValue: number
  handleVolume: (volume: number) => void
}
export function VolumeControllerSlider({
  className,
  minValue,
  maxValue,
  rangeValue,
  handleVolume,
  ...props
}: Props & ComponentProps<'input'>) {
  return (
    <input
      {...props}
      className={input({ className })}
      type="range"
      min={minValue}
      max={maxValue}
      value={rangeValue}
      style={{
        backgroundSize: `${(rangeValue * 100) / maxValue}%`
      }}
      onChange={event => handleVolume(Number(event.target.value))}
    />
  )
}
