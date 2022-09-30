import tw from 'tailwind-styled-components'

export const Container = tw.footer`
  flex flex-wrap flex-col sm:flex-row
  items-center justify-center
  mt-28 p-14 gap-10 md:gap-14
  bg-white/5 backdrop-blur-sm
`

export const Info = tw.a`
  flex items-center gap-2
  text-xl sm:text-lg
  underline-offset-4 hover:underline
  w-full
`
export const Section = tw.section`
  flex flex-col
  gap-2 sm:gap-0
`
