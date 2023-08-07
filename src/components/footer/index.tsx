import React, { ComponentProps, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { FiAward, FiGithub } from 'react-icons/fi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { container } from './styles'
import { useThemeStore } from '@/stores/BackgroundStore'

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

  const Section = ({ children }: { children: ReactNode }) => (
    <section className="flex flex-col gap-2 sm:gap-0">{children}</section>
  )

  const theme = useThemeStore(set => set.theme)

  return (
    <footer className={container({ theme })}>
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
      <Section>
        <Info
          href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
          className="cursor-pointer"
        >
          <AiOutlineCopyrightCircle /> MIT License
        </Info>
        <Info href="https://github.com/mateusfg7">
          by <span className="font-bold">mateusfg7</span>
        </Info>
      </Section>
      <Section>
        <Info href="https://github.com/mateusfg7/Noisekun">
          <FiGithub /> Source
        </Info>

        <Info href="https://github.com/mateusfg7/Noisekun/#credits">
          <FiAward /> Credits
        </Info>
      </Section>
    </footer>
  )
}
