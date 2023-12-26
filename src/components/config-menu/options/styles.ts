import { tv } from 'tailwind-variants'

export const input = tv({
  base: /*tw:*/ 'form-input w-24 h-full rounded-lg p-2 text-center bg-transparent',
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

export const settingRow = tv({
  base: /*tw:*/ 'flex items-center justify-between rounded-xl bg-neutral-600/10 p-1 text-lg',
  variants: {
    theme: {
      transition: /*tw:*/ 'bg-main/5',
      dark: /*tw:*/ 'bg-dark-background/5',
      light: /*tw:*/ 'bg-light-background',
      'blue-room': /*tw:*/ 'bg-blue-room/10',
      train: /*tw:*/ 'bg-train/10',
      waterfall: /*tw:*/ 'bg-waterfall/10',
      'camping-fire': /*tw:*/ 'bg-camping-fire/10'
    }
  }
})
