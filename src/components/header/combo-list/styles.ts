import { tv } from 'tailwind-variants'

export const triggerButton = tv({
  base: /*tw:*/ 'flex opacity-90 hover:opacity-100 disabled:opacity-50 disabled:hover:opacity-50',
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

export const comboButton = tv({
  base: /*tw:*/ 'rounded-xl p-3 leading-none tracking-wider duration-300',
  variants: {
    theme: {
      transition: /*tw:*/ 'text-white bg-white/5',
      dark: /*tw:*/ 'text-dark-foreground bg-dark-foreground/5',
      light: /*tw:*/ 'text-light-foreground bg-light-foreground/5',
      'blue-room': /*tw:*/ 'text-blue-room bg-blue-room/5',
      train: /*tw:*/ 'text-train bg-train/5',
      waterfall: /*tw:*/ 'text-waterfall bg-waterfall/5',
      'camping-fire': /*tw:*/ 'text-camping-fire bg-camping-fire/5'
    },
    active: {
      true: /*tw:*/ 'bg-white/20'
    }
  },
  compoundVariants: [
    {
      theme: 'dark',
      active: true,
      class: /*tw:*/ 'bg-dark-foreground/20'
    },
    {
      theme: 'light',
      active: true,
      class: /*tw:*/ 'bg-light-foreground/20'
    },
    {
      theme: 'blue-room',
      active: true,
      class: /*tw:*/ 'bg-blue-room/20'
    },
    {
      theme: 'train',
      active: true,
      class: /*tw:*/ 'bg-train/20'
    },
    {
      theme: 'waterfall',
      active: true,
      class: /*tw:*/ 'bg-waterfall/20'
    },
    {
      theme: 'camping-fire',
      active: true,
      class: /*tw:*/ 'bg-camping-fire/20'
    }
  ]
})

export const editButton = tv({
  extend: comboButton,
  base: /*tw:*/ 'flex items-center gap-1 justify-between bg-gradient-to-r group',
  variants: {
    theme: {
      transition: /*tw:*/ 'hover:from-white/20 hover:to-red-600/20',
      dark: /*tw:*/ 'hover:from-dark-foreground/20 hover:to-red-600/20',
      light: /*tw:*/ 'hover:from-light-foreground/20 hover:to-red-600/20',
      'blue-room': /*tw:*/ 'hover:from-blue-room/20 hover:to-red-600/20',
      train: /*tw:*/ 'hover:from-train/20 hover:to-red-600/20',
      waterfall: /*tw:*/ 'hover:from-waterfall/20 hover:to-red-600/20',
      'camping-fire': /*tw:*/ 'hover:from-camping-fire/20 hover:to-red-600/20'
    },
    active: {
      true: /*tw:*/ 'bg-white/20'
    }
  }
})

export const toggleEditContainer = tv({
  base: /*tw:*/ 'min-w-40 mb-2 flex items-center justify-around gap-1 rounded-lg',
  variants: {
    theme: {
      transition: /*tw:*/ 'bg-white/5 text-white',
      dark: /*tw:*/ 'bg-dark-foreground/5 text-dark-foreground',
      light: /*tw:*/ 'bg-light-foreground/5 text-light-foreground',
      'blue-room': /*tw:*/ 'bg-blue-room/5 text-blue-room',
      train: /*tw:*/ 'bg-train/5 text-train',
      waterfall: /*tw:*/ 'bg-waterfall/5 text-waterfall',
      'camping-fire': /*tw:*/ 'bg-camping-fire/5 text-camping-fire'
    }
  }
})

export const toggleEditButton = tv({
  base: /*tw:*/ 'flex-1 rounded-lg py-1',
  variants: {
    theme: {
      transition: /*tw:*/ 'hover:bg-white/10',
      dark: /*tw:*/ 'hover:bg-dark-foreground/10',
      light: /*tw:*/ 'hover:bg-light-foreground/10',
      'blue-room': /*tw:*/ 'hover:bg-blue-room/10',
      train: /*tw:*/ 'hover:bg-train/10',
      waterfall: /*tw:*/ 'hover:bg-waterfall/10',
      'camping-fire': /*tw:*/ 'hover:bg-camping-fire/10'
    },
    active: {
      true: ''
    }
  },
  compoundVariants: [
    {
      theme: 'transition',
      active: true,
      class: /*tw:*/ 'bg-white/20'
    },
    {
      theme: 'dark',
      active: true,
      class: /*tw:*/ 'bg-dark-foreground/20'
    },
    {
      theme: 'light',
      active: true,
      class: /*tw:*/ 'bg-light-foreground/20'
    },
    {
      theme: 'blue-room',
      active: true,
      class: /*tw:*/ 'bg-blue-room/20'
    },
    {
      theme: 'train',
      active: true,
      class: /*tw:*/ 'bg-train/20'
    },
    {
      theme: 'waterfall',
      active: true,
      class: /*tw:*/ 'bg-waterfall/20'
    },
    {
      theme: 'camping-fire',
      active: true,
      class: /*tw:*/ 'bg-camping-fire/20'
    }
  ]
})
