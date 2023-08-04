import { tv } from 'tailwind-variants'

export const button = tv({
  base: /*tw:*/ 'border-2 rounded-2xl cursor-pointer font-bold text-xl p-10 md:p-7 w-full bg-center bg-cover shadow-xl shadow-black/30 border-transparent text-white/80',
  variants: {
    selected: {
      true: /*tw:*/ 'border-white text-white'
    },
    active: {
      true: /*tw:*/ 'brightness-95 border-white/80 text-white/80'
    },
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
