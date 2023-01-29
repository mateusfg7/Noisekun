import tw from 'tailwind-styled-components'

interface ContainerProps {
  $isActive: boolean
}
export const Container = tw.div<ContainerProps>`
  w-full h-max
  relative group
  ${props => (props.$isActive ? 'opacity-1' : 'opacity-0')}
`
