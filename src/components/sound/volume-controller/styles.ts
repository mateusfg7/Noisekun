import { tv } from 'tailwind-variants'

export const container = tv({
  base: /*tw:*/ 'w-full h-max relative group opacity-0',
  variants: {
    active: { true: /*tw:*/ 'opacity-1' }
  }
})
