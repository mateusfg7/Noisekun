import tw from 'tailwind-styled-components'

export const Container = tw.header`
  relative flex gap-5
  justify-between md:justify-center
  items-center
  px-6
  h-[10vh] md:h-[15vh]
  shadow-header
`

export const HeaderTitle = tw.h1`font-semibold text-2xl text-white/90`

export const SettingsContainer = tw.div`
  md:absolute md:right-10
  flex gap-3 items-center
`
