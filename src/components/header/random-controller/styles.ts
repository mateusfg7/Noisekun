import { tv } from 'tailwind-variants'

export const soundButton = tv({
  variants: {
    theme: {
      transition: /*tw:*/ 'text-white',
      dark: /*tw:*/ 'text-dark-foreground',
      light: /*tw:*/ 'text-light-foreground',
      'blue-room': /*tw:*/ 'text-blue-room',
      train: /*tw:*/ 'text-train',
      waterfall: /*tw:*/ 'text-waterfall',
      'camping-fire': /*tw:*/ 'text-camping-fire'
    }
  }
})
