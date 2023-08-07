import { tv } from 'tailwind-variants'

export const title = tv({
  base: 'text-2xl font-semibold',
  variants: {
    theme: {
      transition: /*tw:*/ 'text-white/90',
      dark: /*tw:*/ 'text-dark-foreground/90',
      'blue-room': /*tw:*/ 'text-blue-room/90',
      train: /*tw:*/ 'text-train/90',
      waterfall: /*tw:*/ 'text-waterfall/90',
      light: /*tw:*/ 'text-light-foreground/90',
      'camping-fire': /*tw:*/ 'text-camping-fire/90'
    }
  }
})
