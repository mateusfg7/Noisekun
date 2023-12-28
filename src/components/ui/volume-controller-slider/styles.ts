import { tv } from 'tailwind-variants'

export const input = tv({
  base: /*tw:*/ 'slider-input bg-gradient-to-r bg-no-repeat h-4 w-full appearance-none rounded-xl group-hover:cursor-pointer sm:h-1 slider-thumb:h-4 slider-thumb:w-4 slider-thumb:appearance-none slider-thumb:rounded-full slider-thumb:border-none slider-thumb:opacity-0 slider-thumb:ring-white/10 slider-thumb:transition-all slider-thumb:duration-100 slider-thumb:active:ring-4 slider-thumb:sm:opacity-100 slider-thumb:md:h-2 slider-thumb:md:w-2 slider-thumb:md:group-hover:h-3 slider-thumb:md:group-hover:w-3',
  variants: {
    theme: {
      transition:
        /*tw:*/ 'bg-white/30 from-white to-white slider-thumb:bg-white',
      dark: /*tw:*/ 'bg-dark-foreground/30 from-dark-foreground to-dark-foreground slider-thumb:bg-dark-foreground',
      light:
        /*tw:*/ 'bg-light-foreground/30 from-light-foreground to-light-foreground slider-thumb:bg-light-foreground',
      'blue-room':
        /*tw:*/ 'bg-blue-room/30 from-blue-room to-blue-room slider-thumb:bg-blue-room',
      train: /*tw:*/ 'bg-train/30 from-train to-train slider-thumb:bg-train',
      waterfall:
        /*tw:*/ 'bg-waterfall/30 from-waterfall to-waterfall slider-thumb:bg-waterfall',
      'camping-fire':
        /*tw:*/ 'bg-camping-fire/30 from-camping-fire to-camping-fire slider-thumb:bg-camping-fire'
    }
  }
})
