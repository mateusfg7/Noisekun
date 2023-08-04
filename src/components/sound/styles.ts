import { tv } from 'tailwind-variants'

export const icon = tv({
  base: /*tw:*/ 'flex justify-center items-center w-24 h-24 rounded-[10%] text-white/50 cursor-pointer transition duration-300 opacity-70 md:hover:opacity-100 md:hover:shadow-sound md:hover:bg-white/10',
  variants: {
    active: {
      true: /*tw:*/ 'text-white rounded-b-none opacity-100 md:shadow-sound md:bg-white/10'
    }
  }
})
