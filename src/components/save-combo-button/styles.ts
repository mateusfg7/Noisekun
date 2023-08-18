import { tv } from 'tailwind-variants'

export const input = tv({
  base: /*tw:*/ 'form-input rounded-xl text-white bg-white/5 px-2 py-0 border-none focus:ring-0 leading-none tracking-wider duration-300 w-32 text-center animate-show-input placeholder:text-sm opacity-30 hover:opacity-100 focus:opacity-100',
  variants: {
    theme: {
      transition: /*tw:*/ '',
      dark: /*tw:*/ 'text-dark-foreground placeholder:text-dark-foreground/60 bg-dark-foreground/5',
      light:
        /*tw:*/ 'text-light-foreground placeholder:text-light-foreground/60 bg-light-foreground/5',
      'blue-room':
        /*tw:*/ 'text-blue-room placeholder:text-blue-room/60 bg-blue-room/5',
      train: /*tw:*/ 'text-train placeholder:text-train/60 bg-train/5',
      waterfall:
        /*tw:*/ 'text-waterfall placeholder:text-waterfall/60 bg-waterfall/5',
      'camping-fire':
        /*tw:*/ 'text-camping-fire placeholder:text-camping-fire/60 bg-camping-fire/5'
    }
  }
})
