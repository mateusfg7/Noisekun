import type { ComponentProps } from "react";

const FooterLink = ({ children, ...props }: ComponentProps<"a">) => (
  <a
    className="underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

const Separator = () => <span aria-hidden="true">·</span>;

export function Footer() {
  return (
    <footer className="mx-auto flex flex-col items-center gap-2 p-4 text-center text-sm text-primary-foreground/70">
      <p className="text-balance">
        ambient sounds to focus, relax, and stay in the zone.
      </p>
      <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>
          by{" "}
          <FooterLink
            data-umami-event="Author Link"
            href="https://github.com/mateusfg7"
          >
            mateusfg7
          </FooterLink>
        </span>
        <Separator />
        <FooterLink
          data-umami-event="Repository Link"
          href="https://github.com/mateusfg7/Noisekun"
        >
          source
        </FooterLink>
        <Separator />
        <FooterLink
          data-umami-event="Credits Link"
          href="https://github.com/mateusfg7/Noisekun/?tab=readme-ov-file#%EF%B8%8F-credits"
        >
          credits
        </FooterLink>
        <Separator />
        <FooterLink
          data-umami-event="License Link"
          href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
        >
          MIT license
        </FooterLink>
      </p>
    </footer>
  );
}
