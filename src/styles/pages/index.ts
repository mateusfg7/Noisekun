import tw from 'tailwind-styled-components'
import { Background } from '../../stores/BackgroundStore'

interface ContainerProps {
  $background: Background
}

const backgroundClasses = {
  transition: 'animate-background-change',
  dark: 'bg-gray-900',
  'room-and-rain': 'bg-lofi-rain',
  'train-and-rain': 'bg-train-rain',
  waterfall: 'bg-tree',
  static: 'bg-main',
  'camping-fire': 'bg-camping-fire '
}

export const Container = tw.div<ContainerProps>`
  bg-fixed bg-no-repeat bg-cover bg-center

  ${p => backgroundClasses[p.$background]}
`
export const SoundContainer = tw.div`
  flex justify-center items-center
  min-h-[85vh]
  p-14
`

export const SoundGrid = tw.div`
  grid gap-12
  grid-cols-1 xs:grid-cols-2
  2xs:grid-cols-3 sm:grid-cols-4
  md:grid-cols-5 xl:grid-cols-6
  
`
