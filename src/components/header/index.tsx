import React from 'react'
import Link from 'next/link'

import { useThemeStore } from '~/stores/theme-store'
import { ThemeMenu } from './theme-menu'
import { GlobalVolumeController } from './global-volume-controller'
import { title } from './styles'
import { Pomodoro } from './pomodoro'
import { ComboList } from './combo-list'
import { useTranslations } from 'next-intl'

export const Header: React.FC = () => {
  const theme = useThemeStore(set => set.theme)
  const t = useTranslations('Header')

  return (
    <header className="relative flex h-[10vh] items-center justify-between gap-5 px-6 shadow-header transition-all md:h-[13vh]">
      <h1 className={title({ theme })}>
        <Link href="/">Noisekun</Link>
      </h1>
      <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
        <Pomodoro
          titleResetTranslate={t('Reset_Pomodoro_timer')}
          titleToggleTranslate={t('Toggle_Pomodoro_timer')}
        />
      </div>
      <div className="right-10 flex items-center gap-3">
        <GlobalVolumeController
          titleGlobalVolumeTranslate={t('Global_volume_in')}
          titleEnableTranslate={t('Enable/disable_sound')}
        />
        <ThemeMenu titleTranslate={t('Toggle_theme_menu')} />
        <ComboList titleTranslate={t('Toggle_combo_list')} />
      </div>
    </header>
  )
}
