import { Theme } from '~/stores/theme-store'

type ThemeAttrs = {
  title: string
  id: Theme
}

export const themeList: ThemeAttrs[] = [
  {
    title: 'Light',
    id: 'light-theme'
  },
  {
    title: 'Dark',
    id: 'dark-theme'
  },
  {
    title: 'Transition',
    id: 'transition-theme'
  },
  {
    title: 'Room',
    id: 'room-theme'
  },
  {
    title: 'Train',
    id: 'train-theme'
  },
  {
    title: 'Waterfall',
    id: 'waterfall-theme'
  },
  {
    title: 'Camping Fire',
    id: 'camping-theme'
  }
]
