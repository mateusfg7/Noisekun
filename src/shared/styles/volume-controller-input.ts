import { tv } from 'tailwind-variants'

export const volumeControllerInput = tv({
  base: /*tw:*/ 'slider-input bg-gradient-to-r bg-no-repeat',
  variants: {
    theme: {
      transition:
        /*tw:*/ 'bg-white/30 from-white to-white [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:bg-white',
      dark: /*tw:*/ 'bg-dark-foreground/30 from-dark-foreground to-dark-foreground [&::-moz-range-thumb]:bg-dark-foreground [&::-webkit-slider-thumb]:bg-dark-foreground',
      light:
        /*tw:*/ 'bg-light-foreground/30 from-light-foreground to-light-foreground [&::-moz-range-thumb]:bg-light-foreground [&::-webkit-slider-thumb]:bg-light-foreground',
      'blue-room':
        /*tw:*/ 'bg-blue-room/30 from-blue-room to-blue-room [&::-moz-range-thumb]:bg-blue-room [&::-webkit-slider-thumb]:bg-blue-room',
      train:
        /*tw:*/ 'bg-train/30 from-train to-train [&::-moz-range-thumb]:bg-train [&::-webkit-slider-thumb]:bg-train',
      waterfall:
        /*tw:*/ 'bg-waterfall/30 from-waterfall to-waterfall [&::-moz-range-thumb]:bg-waterfall [&::-webkit-slider-thumb]:bg-waterfall',
      'camping-fire':
        /*tw:*/ 'bg-camping-fire/30 from-camping-fire to-camping-fire [&::-moz-range-thumb]:bg-camping-fire [&::-webkit-slider-thumb]:bg-camping-fire'
    }
  }
})
