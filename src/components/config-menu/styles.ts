import { tv } from 'tailwind-variants'

export const triggerButton = tv({
  base: /*tw:*/ 'opacity-90 hover:opacity-100 text-xl',
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
