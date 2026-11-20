import { tv } from "tailwind-variants";

export const actionButton = tv({
  base: /*tw:*/ "rounded-full bg-primary-foreground/5 px-2 py-1 text-sm leading-none tracking-wider text-primary-foreground/80 transition-colors duration-300 hover:bg-primary-foreground/10 hover:text-primary-foreground active:bg-primary-foreground/5 disabled:cursor-not-allowed disabled:bg-primary-foreground/5 disabled:text-primary-foreground/50",
});
