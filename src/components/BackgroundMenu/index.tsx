import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineWallpaper } from 'react-icons/md'

import { Background, useBackgroundStore } from '../../stores/BackgroundStore'

import {
  Container,
  MenuButtonContainer,
  MenuButton,
  MenuItems,
  MenuItemContainer,
  ItemButton
} from './styles'

export const BackgroundMenu = () => {
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
    <Container>
      <Menu>
        <MenuButtonContainer>
          <MenuButton $as={Menu.Button} title="Toggle Background Menu">
            <MdOutlineWallpaper size={22} />
          </MenuButton>
        </MenuButtonContainer>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems $as={Menu.Items}>
            {backgroundList.map(background => (
              <MenuItemContainer key={background.id}>
                <Menu.Item>
                  {({ active }) => (
                    <ItemButton
                      active={active}
                      currentBackground={currentBackground}
                      expectedBackground={background.id}
                      className={`${background.backgroundClass}`}
                      onClick={() => handleBackground(background.id)}
                    >
                      {background.title}
                    </ItemButton>
                  )}
                </Menu.Item>
              </MenuItemContainer>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </Container>
  )
}
