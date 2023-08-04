import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineWallpaper } from 'react-icons/md'

import { Background, useBackgroundStore } from '@/stores/BackgroundStore'
import { button } from './styles'

export function BackgroundMenu() {
  const setBackground = useBackgroundStore(set => set.setBackground)
  const currentBackground = useBackgroundStore(set => set.background)

  function handleBackground(newBackground: Background) {
    setBackground(newBackground)
    localStorage.setItem('background', newBackground)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const backgroundOnStorage = localStorage.getItem(
        'background'
      ) as Background
      if (backgroundOnStorage) setBackground(backgroundOnStorage)
      else localStorage.setItem('background', currentBackground)
    }
  }, [])

  interface BackgroundAttrs {
    title: string
    id: Background
  }
  const backgroundList: BackgroundAttrs[] = [
    {
      title: 'Static',
      id: 'static'
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
      title: 'Rain on Window',
      id: 'room-and-rain'
    },
    {
      title: 'Train and Rain',
      id: 'train-and-rain'
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
    <div className="z-50">
      <Menu>
        <div className="group flex">
          <Menu.Button
            title="Toggle Background Menu"
            className="flex opacity-90 group-hover:opacity-100"
          >
            <MdOutlineWallpaper size={22} />
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
            className="snap absolute left-4 right-4 mt-2 flex max-h-[85vh] origin-top-right snap-y snap-mandatory scroll-pt-4 flex-col gap-4 overflow-y-auto rounded-2xl bg-white/40 p-4 shadow-2xl backdrop-blur-md scrollbar-hide focus:outline-none md:left-auto md:right-0"
          >
            {backgroundList.map(background => {
              return (
                <div key={background.id} className="min-w-max snap-start">
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <button
                          className={button({
                            active,
                            selected: currentBackground === background.id,
                            background: background.id
                          })}
                          onClick={() => handleBackground(background.id)}
                        >
                          {background.title}
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
