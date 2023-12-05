import { Theme } from '~/stores/theme-store'

type ThemeAttrs = {
  title: string
  id: Theme
}

export const themeList: ThemeAttrs[] = [
  {
    title: 'Light',
    id: 'light'
  },
  {
    title: 'Dark',
    id: 'dark'
  },
  {
    title: 'Transition',
    id: 'transition'
  },
  {
    title: 'Blue Room',
    id: 'blue-room'
  },
  {
    title: 'Train',
    id: 'train'
  },
  {
    title: 'Waterfall',
    id: 'waterfall'
  },
  {
    title: 'Camping Fire',
    id: 'camping-fire'
  }
]
