import { tv } from 'tailwind-variants'

export const container = tv({
  base: /*tw:*/ 'flex flex-col flex-wrap items-center justify-center gap-10 p-11 sm:flex-row md:gap-14',
  variants: {
    theme: {
      transition: /*tw:*/ 'text-white',
      dark: /*tw:*/ 'text-dark-foreground',
      'blue-room': /*tw:*/ 'text-blue-room',
      train: /*tw:*/ 'text-train',
      waterfall: /*tw:*/ 'text-waterfall',
      light: /*tw:*/ 'text-light-foreground',
      'camping-fire': /*tw:*/ 'text-camping-fire'
    }
  }
})
