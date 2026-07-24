import Link from "next/link";
import type { ComponentProps } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiAward, FiGithub } from "react-icons/fi";
import { tv } from "tailwind-variants";

import { Logo } from "./logo";

export function Footer() {
  const Info = ({ children, className, ...props }: ComponentProps<"a">) => {
    const style = tv({
      base: /*tw:*/ "flex w-full items-center gap-2 text-xl underline-offset-4 hover:underline sm:text-lg",
    });
    return (
      <a className={style(className)} target="_blank" {...props}>
        {children}
      </a>
    );
  };

  return (
    <footer className="flex flex-col items-center gap-10 p-11 text-primary-foreground">
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 sm:flex-row md:gap-14">
        <div className="w-14 overflow-hidden rounded-2xl shadow-lg">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <section className="flex flex-col gap-2 sm:gap-0">
          <Info
            className="cursor-pointer"
            data-umami-event="License Link"
            href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
          >
            <AiOutlineCopyrightCircle /> MIT License
          </Info>
          <Info
            data-umami-event="Author Link"
            href="https://github.com/mateusfg7"
          >
            by <span className="font-bold">mateusfg7</span>
          </Info>
        </section>
        <section className="flex flex-col gap-2 sm:gap-0">
          <Info
            data-umami-event="Repository Link"
            href="https://github.com/mateusfg7/Noisekun"
          >
            <FiGithub /> Source
          </Info>

          <Info
            data-umami-event="Credits Link"
            href="https://github.com/mateusfg7/Noisekun/?tab=readme-ov-file#%EF%B8%8F-credits"
          >
            <FiAward /> Credits
          </Info>
        </section>
      </div>
    </footer>
  );
}
