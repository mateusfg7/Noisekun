import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex gap-3 items-center
  opacity-90 hover:opacity-100
`

interface SliderContainerProps {
  $isShowing: boolean
}
export const SliderContainer = tw.div<SliderContainerProps>`
  ${p => (p.$isShowing ? 'flex' : 'hidden')}
  items-center
  w-28 h-max
  relative
  group
`
