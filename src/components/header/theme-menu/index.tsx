import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { PiPaintBrushBroadBold } from 'react-icons/pi'

import { Theme, useThemeStore } from '@/stores/theme-store'
import { themeButton, triggerButton } from './styles'

export function ThemeMenu() {
  const setTheme = useThemeStore(set => set.setTheme)
  const currentTheme = useThemeStore(set => set.theme)

  function handleTheme(newTheme: Theme) {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeOnStorage = localStorage.getItem('theme') as Theme
      if (themeOnStorage) setTheme(themeOnStorage)
      else localStorage.setItem('theme', currentTheme)
    }
  }, [])

  interface ThemeAttrs {
    title: string
    id: Theme
  }
  const themeList: ThemeAttrs[] = [
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

  return (
    <div className="z-40">
      <Menu>
        <div className="group flex">
          <Menu.Button
            title="Toggle theme menu"
            className={triggerButton({ theme: currentTheme })}
            umami-data-event="Open theme menu"
          >
            <PiPaintBrushBroadBold size={22} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="div"
            className="snap absolute left-4 right-4 mt-2 flex max-h-[85vh] origin-top-right snap-y snap-mandatory scroll-pt-4 flex-col gap-4 overflow-y-auto rounded-2xl p-4 shadow-2xl backdrop-blur-md scrollbar-hide focus:outline-none md:left-auto md:right-0"
          >
            {themeList.map(theme => {
              return (
                <div key={theme.id} className="min-w-max snap-start">
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <button
                          className={themeButton({
                            active,
                            theme: theme.id,
                            selected: currentTheme === theme.id,
                            background: theme.id
                          })}
                          onClick={() => handleTheme(theme.id)}
                          umami-data-event={`Select ${theme.title} Theme`}
                        >
                          {theme.title}
                        </button>
                      )
                    }}
                  </Menu.Item>
                </div>
              )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
