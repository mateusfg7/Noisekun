import { tv } from 'tailwind-variants'

export const triggerButton = tv({
  base: /*tw:*/ 'flex opacity-90 group-hover:opacity-100',
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

export const themeButton = tv({
  base: /*tw:*/ 'border-2 rounded-2xl cursor-pointer font-bold text-xl p-10 md:p-7 w-full bg-center bg-cover shadow-xl shadow-black/30 border-transparent',
  variants: {
    selected: {
      true: /*tw:*/ 'border-white text-white'
    },
    active: {
      true: /*tw:*/ 'brightness-95 border-white/80 text-white/80'
    },
    background: {
      transition: /*tw:*/ 'animate-background-change-sm',
      dark: /*tw:*/ 'bg-dark-background',
      'blue-room': /*tw:*/ 'bg-blue-room-gif',
      train: /*tw:*/ 'bg-train-gif',
      waterfall: /*tw:*/ 'bg-waterfall-gif',
      light: /*tw:*/ 'bg-light-background',
      'camping-fire': /*tw:*/ 'bg-camping-fire-gif'
    },
    theme: {
      transition: /*tw:*/ 'text-white/80',
      dark: /*tw:*/ 'text-dark-foreground/80',
      light: /*tw:*/ 'text-light-foreground/80',
      'blue-room': /*tw:*/ 'text-blue-room/80',
      train: /*tw:*/ 'text-train/80',
      waterfall: /*tw:*/ 'text-waterfall/80',
      'camping-fire': /*tw:*/ 'text-camping-fire/80'
    }
  },
  compoundVariants: [
    {
      theme: ['dark'],
      active: true,
      class: /*tw:*/ 'border-dark-foreground/80 text-dark-foreground/80'
    },
    {
      theme: ['dark'],
      selected: true,
      class: /*tw:*/ 'border-dark-foreground text-dark-foreground'
    },
    {
      theme: ['light'],
      active: true,
      class: /*tw:*/ 'border-light-foreground/80 text-light-foreground/80'
    },
    {
      theme: ['light'],
      selected: true,
      class: /*tw:*/ 'border-light-foreground text-light-foreground'
    },
    {
      theme: ['blue-room'],
      active: true,
      class: /*tw:*/ 'border-blue-room/80 text-blue-room/80'
    },
    {
      theme: ['blue-room'],
      selected: true,
      class: /*tw:*/ 'border-blue-room text-blue-room'
    },
    {
      theme: ['train'],
      active: true,
      class: /*tw:*/ 'border-train/80 text-train/80'
    },
    {
      theme: ['train'],
      selected: true,
      class: /*tw:*/ 'border-train text-train'
    },
    {
      theme: ['waterfall'],
      active: true,
      class: /*tw:*/ 'border-waterfall/80 text-waterfall/80'
    },
    {
      theme: ['waterfall'],
      selected: true,
      class: /*tw:*/ 'border-waterfall text-waterfall'
    },
    {
      theme: ['camping-fire'],
      active: true,
      class: /*tw:*/ 'border-camping-fire/80 text-camping-fire/80'
    },
    {
      theme: ['camping-fire'],
      selected: true,
      class: /*tw:*/ 'border-camping-fire text-camping-fire'
    }
  ]
})
