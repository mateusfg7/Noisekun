import { tv } from "tailwind-variants";

export const input = tv({
  base: /*tw:*/ "form-input h-full w-24 rounded-lg border-primary-foreground/70 bg-transparent p-2 text-center focus:border-primary-foreground focus:ring-primary-foreground",
});

export const settingRow = tv({
  base: /*tw:*/ "relative flex items-center justify-between rounded-xl p-1 text-lg",
});

export const dot = tv({
  base: /*tw:*/ "absolute top-1 -left-1 h-[0.4rem] w-[0.4rem] rounded-full bg-primary-foreground opacity-0 transition-opacity duration-300",
  variants: {
    active: {
      true: "opacity-1",
    },
  },
});
