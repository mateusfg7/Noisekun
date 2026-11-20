import { tv } from "tailwind-variants";

export const headerIconButton = tv({
  base: /*tw:*/ "flex size-8 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground disabled:cursor-not-allowed disabled:text-primary-foreground/40 disabled:hover:bg-transparent",
});
