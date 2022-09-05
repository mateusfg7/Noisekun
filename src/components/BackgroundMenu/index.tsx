import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiMonitor } from 'react-icons/fi'

import { useBackgroundStore } from '../../stores/BackgroundStore'

export const BackgroundMenu = () => {
  const setBackground = useBackgroundStore(set => set.setBackground)
  const background = useBackgroundStore(set => set.background)

  return (
    <Menu as="div" className="z-50">
      <div className="flex group">
        <Menu.Button className="opacity-90 group-hover:opacity-100">
          <FiMonitor size={22} />
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
        <Menu.Items className="max-h-[85vh] md:w-52 overflow-y-auto absolute left-4 right-4 md:left-auto md:right-0 mt-2 p-2 origin-top-right rounded-2xl bg-white/20 backdrop-blur-md shadow-lg focus:outline-none">
          <div className="flex flex-col gap-2 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`border-2 ${
                    background === 'animated' && 'border-white'
                  } ${
                    active ? 'border-white' : 'border-transparent'
                  } font-bold text-xl p-10 md:p-6 rounded-2xl cursor-pointer animate-background-change-sm`}
                  onClick={() => setBackground('animated')}
                >
                  Animated
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`border-2 ${
                    background === 'dark' && 'border-white'
                  } ${
                    active ? 'border-white' : 'border-transparent'
                  } font-bold text-xl p-10 md:p-6 rounded-2xl cursor-pointer bg-gray-900`}
                  onClick={() => setBackground('dark')}
                >
                  Dark
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`border-2 ${
                    background === 'lofi-rain' && 'border-white'
                  } ${
                    active ? 'border-white' : 'border-transparent'
                  } font-bold text-xl p-10 md:p-6 rounded-2xl cursor-pointer bg-lofi-rain bg-center bg-cover`}
                  onClick={() => setBackground('lofi-rain')}
                >
                  LoFi Rain
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`border-2 ${
                    background === 'train-rain' && 'border-white'
                  } ${
                    active ? 'border-white' : 'border-transparent'
                  } font-bold text-xl p-10 md:p-6 rounded-2xl cursor-pointer bg-train-rain bg-center bg-cover`}
                  onClick={() => setBackground('train-rain')}
                >
                  Train Rain
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`border-2 ${
                    background === 'tree' && 'border-white'
                  } ${
                    active ? 'border-white' : 'border-transparent'
                  } font-bold text-xl p-10 md:p-6 rounded-2xl cursor-pointer bg-tree bg-center bg-cover`}
                  onClick={() => setBackground('tree')}
                >
                  Tree
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
