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
  const background = useBackgroundStore(set => set.background)

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
      else localStorage.setItem('background', background)
    }
  }, [])

  return (
    <Container>
      <Menu>
        <MenuButtonContainer>
          <MenuButton $as={Menu.Button}>
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
            <MenuItemContainer>
              <Menu.Item>
                {({ active }) => (
                  <ItemButton
                    active={active}
                    currentBackground={background}
                    expectedBackground="static"
                    className="bg-main"
                    onClick={() => handleBackground('static')}
                  >
                    Static
                  </ItemButton>
                )}
              </Menu.Item>
            </MenuItemContainer>
            <MenuItemContainer>
              <Menu.Item>
                {({ active }) => (
                  <ItemButton
                    active={active}
                    currentBackground={background}
                    expectedBackground="dark"
                    className="bg-gray-900"
                    onClick={() => handleBackground('dark')}
                  >
                    Dark
                  </ItemButton>
                )}
              </Menu.Item>
            </MenuItemContainer>
            <MenuItemContainer>
              <Menu.Item>
                {({ active }) => (
                  <ItemButton
                    active={active}
                    currentBackground={background}
                    expectedBackground="transition"
                    className="animate-background-change-sm"
                    onClick={() => handleBackground('transition')}
                  >
                    Transition
                  </ItemButton>
                )}
              </Menu.Item>
            </MenuItemContainer>
            <MenuItemContainer>
              <Menu.Item>
                {({ active }) => (
                  <ItemButton
                    active={active}
                    currentBackground={background}
                    expectedBackground="room-and-rain"
                    className="bg-lofi-rain-thumb"
                    onClick={() => handleBackground('room-and-rain')}
                  >
                    Room and Rain
                  </ItemButton>
                )}
              </Menu.Item>
            </MenuItemContainer>
            <MenuItemContainer>
              <Menu.Item>
                {({ active }) => (
                  <ItemButton
                    active={active}
                    currentBackground={background}
                    expectedBackground="train-and-rain"
                    className="bg-train-rain-thumb"
                    onClick={() => handleBackground('train-and-rain')}
                  >
                    Train and Rain
                  </ItemButton>
                )}
              </Menu.Item>
            </MenuItemContainer>
            <MenuItemContainer>
              <Menu.Item>
                {({ active }) => (
                  <ItemButton
                    active={active}
                    currentBackground={background}
                    expectedBackground="waterfall"
                    className="bg-tree-thumb"
                    onClick={() => handleBackground('waterfall')}
                  >
                    Waterfall
                  </ItemButton>
                )}
              </Menu.Item>
            </MenuItemContainer>
            <MenuItemContainer>
              <Menu.Item>
                {({ active }) => (
                  <ItemButton
                    active={active}
                    currentBackground={background}
                    expectedBackground="camping-fire"
                    className="bg-camping-fire-thumb"
                    onClick={() => handleBackground('camping-fire')}
                  >
                    Camping Fire
                  </ItemButton>
                )}
              </Menu.Item>
            </MenuItemContainer>
          </MenuItems>
        </Transition>
      </Menu>
    </Container>
  )
}
