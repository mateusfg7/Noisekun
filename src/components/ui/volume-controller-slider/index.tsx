import { ComponentProps } from 'react'
import { useThemeStore } from '~/stores/theme-store'

import { input } from './styles'

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
  const { theme } = useThemeStore()

  return (
    <input
      {...props}
      className={input({ theme, className })}
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
