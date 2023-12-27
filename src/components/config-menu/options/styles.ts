import { tv } from 'tailwind-variants'

export const input = tv({
  base: /*tw:*/ 'form-input w-24 h-full rounded-lg p-2 text-center bg-transparent',
  variants: {
    theme: {
      transition: /*tw:*/ 'border-main/20 focus:border-main focus:ring-main',
      dark: /*tw:*/ 'border-dark-background/20 focus:border-dark-background focus:ring-dark-background',
      light:
        /*tw:*/ 'border-light-foreground/20 focus:border-light-foreground focus:ring-light-foreground',
      'blue-room':
        /*tw:*/ 'border-blue-room/50 focus:border-blue-room focus:ring-blue-room',
      train: /*tw:*/ 'border-train/50 focus:border-train focus:ring-train',
      waterfall:
        /*tw:*/ 'border-waterfall/70 focus:border-waterfall focus:ring-waterfall',
      'camping-fire':
        /*tw:*/ 'border-camping-fire/70 focus:border-camping-fire focus:ring-camping-fire'
    }
  }
})

export const settingRow = tv({
  base: /*tw:*/ 'flex items-center justify-between rounded-xl bg-neutral-600/10 p-1 text-lg',
  variants: {
    theme: {
      transition: /*tw:*/ 'bg-main/0',
      dark: /*tw:*/ 'bg-dark-background/0',
      light: /*tw:*/ 'bg-light-background/0',
      'blue-room': /*tw:*/ 'bg-blue-room/0',
      train: /*tw:*/ 'bg-train/0',
      waterfall: /*tw:*/ 'bg-waterfall/0',
      'camping-fire': /*tw:*/ 'bg-camping-fire/0'
    }
  }
})
