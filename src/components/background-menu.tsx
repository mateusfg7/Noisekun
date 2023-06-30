import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineWallpaper } from 'react-icons/md'

import { Background, useBackgroundStore } from '@/stores/BackgroundStore'

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
    backgroundClass: string
  }
  const backgroundList: BackgroundAttrs[] = [
    {
      title: 'Static',
      id: 'static',
      backgroundClass: 'bg-main'
    },
    {
      title: 'Dark',
      id: 'dark',
      backgroundClass: 'bg-gray-900'
    },
    {
      title: 'Transition',
      id: 'transition',
      backgroundClass: 'animate-background-change-sm'
    },
    {
      title: 'Rain on Window',
      id: 'room-and-rain',
      backgroundClass: 'bg-lofi-rain-thumb'
    },
    {
      title: 'Train and Rain',
      id: 'train-and-rain',
      backgroundClass: 'bg-train-rain-thumb'
    },
    {
      title: 'Waterfall',
      id: 'waterfall',
      backgroundClass: 'bg-tree-thumb'
    },
    {
      title: 'Camping Fire',
      id: 'camping-fire',
      backgroundClass: 'bg-camping-fire-thumb'
    }
  ]

  return (
    <div className="z-50">
      <Menu>
        <div className="flex group">
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
            className="max-h-[85vh] flex flex-col gap-4 overflow-y-auto snap snap-y snap-mandatory scroll-pt-4 scrollbar-hide absolute left-4 right-4 md:left-auto md:right-0 mt-2 p-4 origin-top-right rounded-2xl bg-white/40 backdrop-blur-md shadow-2xl focus:outline-none"
          >
            {backgroundList.map(background => {
              return (
                <div key={background.id} className="snap-start min-w-max">
                  <Menu.Item>
                    {({ active }) => {
                      const isSelected =
                        currentBackground !== background.id && !active
                      const isNotSelected =
                        currentBackground === background.id && !active
                      return (
                        <button
                          className={`border-2 rounded-2xl cursor-pointer font-bold text-xl p-10 md:p-7 w-full bg-center bg-cover shadow-xl shadow-black/30 ${
                            isSelected && 'border-transparent text-white/80'
                          } ${isNotSelected && 'border-white text-white'} ${
                            active &&
                            'brightness-95 border-white/80 text-white/80'
                          } ${background.backgroundClass}`}
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
