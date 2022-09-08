import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex flex-col
  justify-center items-center
  w-24 h-24
`

interface IconProps {
  active: boolean
}
export const Icon = tw.div<IconProps>`
  flex justify-center items-center
  w-24 h-24
  rounded-[10%]
  text-white/50
  cursor-pointer
  transition duration-300
  md:hover:shadow-sound
  md:hover:bg-white/10
  ${p =>
    p.active
      ? 'text-white rounded-b-none opacity-100 md:shadow-sound md:bg-white/10'
      : 'opacity-70 md:hover:opacity-100'}
`
