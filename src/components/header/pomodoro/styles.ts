import { tv } from 'tailwind-variants'

export const container = tv({
  base: /*tw:*/ 'flex items-center gap-1 leading-none',
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

export const controlButton = tv({
  base: /*tw:*/ 'flex h-8 w-8 items-center justify-center rounded-xl text-base transition-colors',
  variants: {
    theme: {
      transition: /*tw:*/ 'bg-white/10 hover:bg-white/30',
      dark: /*tw:*/ 'bg-dark-foreground/10 hover:bg-dark-foreground/30',
      light: /*tw:*/ 'bg-light-foreground/5 hover:bg-light-foreground/10',
      'blue-room': /*tw:*/ 'bg-blue-room/10 hover:bg-blue-room/30',
      train: /*tw:*/ 'bg-train/10 hover:bg-train/30',
      waterfall: /*tw:*/ 'bg-waterfall/10 hover:bg-waterfall/30',
      'camping-fire': /*tw:*/ 'bg-camping-fire/10 hover:bg-camping-fire/30'
    }
  }
})

export const display = tv({
  base: /*tw:*/ 'rounded-xl transition-colors',
  variants: {
    theme: {
      transition: /*tw:*/ 'bg-white/10 hover:bg-white/30',
      dark: /*tw:*/ 'bg-dark-foreground/10 hover:bg-dark-foreground/30',
      light: /*tw:*/ 'bg-light-foreground/5 hover:bg-light-foreground/10',
      'blue-room': /*tw:*/ 'bg-blue-room/10 hover:bg-blue-room/30',
      train: /*tw:*/ 'bg-train/10 hover:bg-train/30',
      waterfall: /*tw:*/ 'bg-waterfall/10 hover:bg-waterfall/30',
      'camping-fire': /*tw:*/ 'bg-camping-fire/10 hover:bg-camping-fire/30'
    }
  }
})

export const minuteConfigInput = tv({
  base: /*tw:*/ 'form-input w-20 rounded-lg p-3 text-center text-lg ',
  variants: {
    theme: {
      transition: /*tw:*/ 'focus:border-main focus:ring-main',
      dark: /*tw:*/ 'focus:border-dark-background focus:ring-dark-background',
      light:
        /*tw:*/ 'focus:border-light-foreground focus:ring-light-foreground',
      'blue-room': /*tw:*/ 'focus:border-blue-room focus:ring-blue-room',
      train: /*tw:*/ 'focus:border-train focus:ring-train',
      waterfall: /*tw:*/ 'focus:border-waterfall focus:ring-waterfall',
      'camping-fire':
        /*tw:*/ 'focus:border-camping-fire focus:ring-camping-fire'
    }
  }
})
