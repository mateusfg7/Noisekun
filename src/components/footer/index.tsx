import React, { ComponentProps } from 'react'
import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { FiAward, FiGithub } from 'react-icons/fi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

import packageJson from '../../../package.json'
import { Logo } from './logo'

export function Footer() {
  const Info = ({ children, className, ...props }: ComponentProps<'a'>) => {
    const style = tv({
      base: /*tw:*/ 'flex items-center gap-2 text-xl sm:text-lg underline-offset-4 hover:underline w-full'
    })
    return (
      <a className={style(className)} target="_blank" {...props}>
        {children}
      </a>
    )
  }

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
            href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
            className="cursor-pointer"
            data-umami-event="License Link"
          >
            <AiOutlineCopyrightCircle /> MIT License
          </Info>
          <Info
            href="https://github.com/mateusfg7"
            data-umami-event="Author Link"
          >
            by <span className="font-bold">mateusfg7</span>
          </Info>
        </section>
        <section className="flex flex-col gap-2 sm:gap-0">
          <Info
            href="https://github.com/mateusfg7/Noisekun"
            data-umami-event="Repository Link"
          >
            <FiGithub /> Source
          </Info>

          <Info
            href="https://github.com/mateusfg7/Noisekun/?tab=readme-ov-file#%EF%B8%8F-credits"
            data-umami-event="Credits Link"
          >
            <FiAward /> Credits
          </Info>
        </section>
      </div>
      <a
        href={`https://github.com/mateusfg7/Noisekun/releases/tag/${packageJson.version}`}
        className="text-primary-foreground/60 hover:text-primary-foreground active:text-primary-foreground"
        data-umami-event="Version Link"
      >
        {packageJson.version}
      </a>
    </footer>
  )
}
