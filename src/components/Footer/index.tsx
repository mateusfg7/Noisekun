import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiAward, FiGithub } from 'react-icons/fi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

import { Container, Info, Section } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="w-14 rounded-2xl overflow-hidden shadow-lg">
        <Link href="/">
          <Image
            src="/icons/icon-192x192.png"
            width={192}
            height={192}
            layout="responsive"
            alt="Noisekun"
            className="cursor-pointer umami--click--footer-logo"
          />
        </Link>
      </div>
      <Section>
        <Info
          href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
          className="cursor-pointer umami--click--license"
          target="_blank"
        >
          <AiOutlineCopyrightCircle /> MIT License
        </Info>
        <Info
          href="https://github.com/mateusfg7"
          className="umami--click--author-credit"
          target="_blank"
        >
          by <span className="font-bold">mateusfg7</span>
        </Info>
      </Section>
      <Section>
        <Info
          href="https://github.com/mateusfg7/Noisekun"
          className="umami--click--repository"
          target="_blank"
        >
          <FiGithub /> Source
        </Info>

        <Info
          className="umami--click--credits"
          href="https://github.com/mateusfg7/Noisekun/#credits"
          target="_blank"
        >
          <FiAward /> Credits
        </Info>
      </Section>
    </Container>
  )
}
