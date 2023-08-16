import { tv } from 'tailwind-variants'

export const button = tv({
  base: /*tw:*/ 'rounded-xl text-white bg-white/5 px-2 py-1 leading-none tracking-wider duration-300  hover:bg-white/20 active:bg-white/10 disabled:bg-white/5 disabled:opacity-70',
  variants: {
    theme: {
      transition: /*tw:*/ '',
      dark: /*tw:*/ 'text-dark-foreground bg-dark-foreground/5 hover:bg-dark-foreground/20 active:bg-dark-foreground/10 disabled:bg-dark-foreground/5',
      light:
        /*tw:*/ 'text-light-foreground bg-light-foreground/5 hover:bg-light-foreground/20 active:bg-light-foreground/10 disabled:bg-light-foreground/5',
      'blue-room':
        /*tw:*/ 'text-blue-room bg-blue-room/5 hover:bg-blue-room/20 active:bg-blue-room/10 disabled:bg-blue-room/5',
      train:
        /*tw:*/ 'text-train bg-train/5 hover:bg-train/20 active:bg-train/10 disabled:bg-train/5',
      waterfall:
        /*tw:*/ 'text-waterfall bg-waterfall/5 hover:bg-waterfall/20 active:bg-waterfall/10 disabled:bg-waterfall/5',
      'camping-fire':
        /*tw:*/ 'text-camping-fire bg-camping-fire/5 hover:bg-camping-fire/20 active:bg-camping-fire/10 disabled:bg-camping-fire/5'
    }
  }
})
