import { tv } from 'tailwind-variants'

export const container = tv({
  base: /*tw:*/ 'bg-fixed bg-no-repeat bg-cover bg-center',
  variants: {
    background: {
      transition: /*tw:*/ 'animate-background-change',
      dark: /*tw:*/ 'bg-gray-900',
      'room-and-rain': /*tw:*/ 'bg-lofi-rain',
      'train-and-rain': /*tw:*/ 'bg-train-rain',
      waterfall: /*tw:*/ 'bg-tree',
      static: /*tw:*/ 'bg-main',
      'camping-fire': /*tw:*/ 'bg-camping-fire'
    }
  }
})
