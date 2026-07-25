import { tv } from "tailwind-variants";

export const themeButton = tv({
  base: /*tw:*/ "w-full cursor-pointer rounded-2xl border-2 border-transparent bg-center bg-cover p-10 font-bold text-xl shadow-black/30 shadow-xl md:p-7",
  compoundVariants: [
    {
      active: true,
      class:
        /*tw:*/ "border-themes-dark-foreground/80 text-themes-dark-foreground/80",
      theme: ["dark-theme"],
    },
    {
      class:
        /*tw:*/ "border-themes-dark-foreground text-themes-dark-foreground",
      selected: true,
      theme: ["dark-theme"],
    },
    {
      active: true,
      class:
        /*tw:*/ "border-themes-light-foreground/80 text-themes-light-foreground/80",
      theme: ["light-theme"],
    },
    {
      class:
        /*tw:*/ "border-themes-light-foreground text-themes-light-foreground",
      selected: true,
      theme: ["light-theme"],
    },
    {
      active: true,
      class: /*tw:*/ "border-themes-room/80 text-themes-room/80",
      theme: ["room-theme"],
    },
    {
      class: /*tw:*/ "border-themes-room text-themes-room",
      selected: true,
      theme: ["room-theme"],
    },
    {
      active: true,
      class: /*tw:*/ "border-themes-train/80 text-themes-train/80",
      theme: ["train-theme"],
    },
    {
      class: /*tw:*/ "border-themes-train text-themes-train",
      selected: true,
      theme: ["train-theme"],
    },
    {
      active: true,
      class: /*tw:*/ "border-themes-waterfall/80 text-themes-waterfall/80",
      theme: ["waterfall-theme"],
    },
    {
      class: /*tw:*/ "border-themes-waterfall text-themes-waterfall",
      selected: true,
      theme: ["waterfall-theme"],
    },
    {
      active: true,
      class: /*tw:*/ "border-themes-camping/80 text-themes-camping/80",
      theme: ["camping-theme"],
    },
    {
      class: /*tw:*/ "border-themes-camping text-themes-camping",
      selected: true,
      theme: ["camping-theme"],
    },
  ],
  variants: {
    active: {
      true: /*tw:*/ "border-white/80 text-white/80 brightness-95",
    },
    background: {
      "camping-theme": /*tw:*/ "bg-camping-fire-gif",
      "dark-theme": /*tw:*/ "bg-themes-dark",
      "light-theme": /*tw:*/ "bg-themes-light",
      "room-theme": /*tw:*/ "bg-blue-room-gif",
      "train-theme": /*tw:*/ "bg-train-gif",
      "transition-theme": /*tw:*/ "animate-background-change-sm",
      "waterfall-theme": /*tw:*/ "bg-waterfall-gif",
    },
    selected: {
      true: /*tw:*/ "border-white text-white",
    },
    theme: {
      "camping-theme": /*tw:*/ "text-themes-camping/80",
      "dark-theme": /*tw:*/ "text-themes-dark-foreground/80",
      "light-theme": /*tw:*/ "text-themes-light-foreground/80",
      "room-theme": /*tw:*/ "text-themes-room/80",
      "train-theme": /*tw:*/ "text-themes-train/80",
      "transition-theme": /*tw:*/ "text-themes-transition/80",
      "waterfall-theme": /*tw:*/ "text-themes-waterfall/80",
    },
  },
});
