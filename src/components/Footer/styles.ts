import tw from 'tailwind-styled-components'

export const Container = tw.footer`
  flex flex-wrap
  justify-center items-center
  p-3.5
`

export const Paragraph = tw.p`
  text-lg md:text-base
  p-1 md:p-[0.125rem]
`
export const AuthorLink = tw.a`font-bold`

export const LicenseLink = tw.a`
  cursor-pointer
  hover:underline 
`
