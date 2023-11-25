import React, { ComponentProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { FiAward, FiGithub } from 'react-icons/fi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

import { useThemeStore } from '@/stores/theme-store'
import { container, version } from './styles'

import packageJson from '../../../package.json'

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

  const theme = useThemeStore(set => set.theme)

  return (
    <footer className={container({ theme })}>
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 sm:flex-row md:gap-14">
        <div className="w-14 overflow-hidden rounded-2xl shadow-lg">
          <Link href="/">
            <Image
              src="/icons/icon-192x192.png"
              width={192}
              height={192}
              alt="Noisekun"
              className="cursor-pointer"
            />
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
        className={version({ theme })}
        data-umami-event="Version Link"
      >
        {packageJson.version}
      </a>
    </footer>
  )
}
