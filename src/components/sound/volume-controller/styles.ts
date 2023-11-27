import { volumeControllerInput } from '~/shared/styles/volume-controller-input'
import { tv } from 'tailwind-variants'

export const container = tv({
  base: /*tw:*/ 'w-full h-max relative group opacity-0',
  variants: {
    active: { true: /*tw:*/ 'opacity-1' }
  }
})

export const input = tv({
  extend: volumeControllerInput,
  base: /*tw:*/ 'absolute left-0 top-0'
})
