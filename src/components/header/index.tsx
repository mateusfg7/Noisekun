import React from 'react'
import Link from 'next/link'

import { GlobalVolumeController } from '@/components/global-volume-controller'
import { BackgroundMenu } from '@/components/background-menu'

import { Container, HeaderTitle, SettingsContainer } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderTitle>
        <Link href="/">Noisekun</Link>
      </HeaderTitle>
      <SettingsContainer>
        <GlobalVolumeController />
        <BackgroundMenu />
      </SettingsContainer>
    </Container>
  )
}
