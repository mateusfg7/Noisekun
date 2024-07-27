import { tv } from 'tailwind-variants'

export const input = tv({
  base: /*tw:*/ 'form-input w-24 h-full rounded-lg p-2 text-center bg-transparent border-primary-foreground/70 focus:border-primary-foreground focus:ring-primary-foreground'
})

export const settingRow = tv({
  base: /*tw:*/ 'flex items-center justify-between rounded-xl p-1 text-lg relative'
})

export const dot = tv({
  base: /*tw:*/ 'absolute -left-1 top-1 h-[0.4rem] w-[0.4rem] rounded-full opacity-0 transition-opacity duration-300 bg-primary-foreground',
  variants: {
    active: {
      true: 'opacity-1'
    }
  }
})
