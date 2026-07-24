import { tv } from 'tailwind-variants'

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
      'transition-theme': /*tw:*/ 'animate-background-change-sm',
      'dark-theme': /*tw:*/ 'bg-themes-dark',
      'light-theme': /*tw:*/ 'bg-themes-light',
      'room-theme': /*tw:*/ 'bg-blue-room-gif',
      'train-theme': /*tw:*/ 'bg-train-gif',
      'waterfall-theme': /*tw:*/ 'bg-waterfall-gif',
      'camping-theme': /*tw:*/ 'bg-camping-fire-gif'
    },
    theme: {
      'transition-theme': /*tw:*/ 'text-themes-transition/80',
      'dark-theme': /*tw:*/ 'text-themes-dark-foreground/80',
      'light-theme': /*tw:*/ 'text-themes-light-foreground/80',
      'room-theme': /*tw:*/ 'text-themes-room/80',
      'train-theme': /*tw:*/ 'text-themes-train/80',
      'waterfall-theme': /*tw:*/ 'text-themes-waterfall/80',
      'camping-theme': /*tw:*/ 'text-themes-camping/80'
    }
  },
  compoundVariants: [
    {
      theme: ['dark-theme'],
      active: true,
      class:
        /*tw:*/ 'border-themes-dark-foreground/80 text-themes-dark-foreground/80'
    },
    {
      theme: ['dark-theme'],
      selected: true,
      class: /*tw:*/ 'border-themes-dark-foreground text-themes-dark-foreground'
    },
    {
      theme: ['light-theme'],
      active: true,
      class:
        /*tw:*/ 'border-themes-light-foreground/80 text-themes-light-foreground/80'
    },
    {
      theme: ['light-theme'],
      selected: true,
      class:
        /*tw:*/ 'border-themes-light-foreground text-themes-light-foreground'
    },
    {
      theme: ['room-theme'],
      active: true,
      class: /*tw:*/ 'border-themes-room/80 text-themes-room/80'
    },
    {
      theme: ['room-theme'],
      selected: true,
      class: /*tw:*/ 'border-themes-room text-themes-room'
    },
    {
      theme: ['train-theme'],
      active: true,
      class: /*tw:*/ 'border-themes-train/80 text-themes-train/80'
    },
    {
      theme: ['train-theme'],
      selected: true,
      class: /*tw:*/ 'border-themes-train text-themes-train'
    },
    {
      theme: ['waterfall-theme'],
      active: true,
      class: /*tw:*/ 'border-themes-waterfall/80 text-themes-waterfall/80'
    },
    {
      theme: ['waterfall-theme'],
      selected: true,
      class: /*tw:*/ 'border-themes-waterfall text-themes-waterfall'
    },
    {
      theme: ['camping-theme'],
      active: true,
      class: /*tw:*/ 'border-themes-camping/80 text-themes-camping/80'
    },
    {
      theme: ['camping-theme'],
      selected: true,
      class: /*tw:*/ 'border-themes-camping text-themes-camping'
    }
  ]
})
