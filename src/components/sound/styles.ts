import { tv } from 'tailwind-variants'

export const soundButton = tv({
  base: /*tw:*/ 'flex justify-center items-center w-24 h-24 rounded-xl transition duration-300 opacity-70',
  variants: {
    theme: {
      transition:
        /*tw:*/ 'text-white/90 md:hover:bg-white/10 disabled:hover:bg-transparent',
      dark: /*tw:*/ 'text-dark-foreground/90 md:hover:bg-dark-foreground/10 disabled:hover:bg-transparent',
      light:
        /*tw:*/ 'text-light-foreground/90 md:hover:bg-light-foreground/10 disabled:hover:bg-transparent',
      'blue-room':
        /*tw:*/ 'text-blue-room/90 md:hover:bg-blue-room/10 disabled:hover:bg-transparent',
      train:
        /*tw:*/ 'text-train/90 md:hover:bg-train/10 disabled:hover:bg-transparent',
      waterfall:
        /*tw:*/ 'text-waterfall/90 md:hover:bg-waterfall/10 disabled:hover:bg-transparent',
      'camping-fire':
        /*tw:*/ 'text-camping-fire/90 md:hover:bg-camping-fire/10 disabled:hover:bg-transparent'
    },
    active: {
      true: /*tw:*/ 'rounded-b-none opacity-100 md:shadow-sound'
    },
    isLoading: {
      true: /*tw:*/ 'animate-loading cursor-wait',
      false: /*tw:*/ 'cursor-pointer md:hover:opacity-100 md:hover:shadow-sound'
    }
  },
  compoundVariants: [
    {
      active: true,
      theme: ['transition'],
      class: /*tw:*/ 'md:bg-white/10'
    },
    {
      active: true,
      theme: ['dark'],
      class: /*tw:*/ 'md:bg-dark-foreground/10'
    },
    {
      active: true,
      theme: ['light'],
      class: /*tw:*/ 'md:bg-light-foreground/10'
    },
    {
      active: true,
      theme: 'camping-fire',
      class: /*tw:*/ 'md:bg-camping-fire/10'
    },
    {
      active: true,
      theme: 'blue-room',
      class: /*tw:*/ 'md:bg-blue-room/10'
    },
    {
      active: true,
      theme: 'train',
      class: /*tw:*/ 'md:bg-train/10'
    },
    {
      active: true,
      theme: 'waterfall',
      class: /*tw:*/ 'md:bg-waterfall/10'
    }
  ]
})

export const icon = tv({
  base: /*tw:*/ 'h-20 w-20'
})
