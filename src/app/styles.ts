import { tv } from 'tailwind-variants'

export const container = tv({
  base: /*tw:*/ 'relative before:bg-fixed before:bg-no-repeat before:bg-cover before:bg-center before:content-[""] before:absolute before:inset-0 before:-z-50',
  variants: {
    background: {
      transition: /*tw:*/ 'animate-background-change',
      dark: /*tw:*/ 'bg-dark-background',
      light: /*tw:*/ 'bg-light-background',
      'blue-room': /*tw:*/ 'before:bg-blue-room-gif before:brightness-50',
      train: /*tw:*/ 'before:bg-train-gif before:brightness-50',
      waterfall: /*tw:*/ 'before:bg-waterfall-gif before:brightness-50',
      'camping-fire': /*tw:*/ 'before:bg-camping-fire-gif before:brightness-50'
    }
  }
})
