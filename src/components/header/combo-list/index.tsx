import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { PiPlaylistBold } from 'react-icons/pi'
import { FiTrash } from 'react-icons/fi'

import { useThemeStore } from '@/stores/theme-store'
import { useComboStore } from '@/stores/combo-store'
import { useSoundsStateStore } from '@/stores/sounds-state-store'

import {
  comboButton,
  editButton,
  toggleEditButton,
  toggleEditContainer,
  triggerButton
} from './styles'

export function ComboList() {
  const theme = useThemeStore(set => set.theme)
  const setTheme = useThemeStore(set => set.setTheme)
  const sounds = useSoundsStateStore(state => state.sounds)
  const bulkUpdateSounds = useSoundsStateStore(state => state.bulkUpdate)
  const combos = useComboStore(state => state.combos)
  const deleteCombo = useComboStore(state => state.deleteCombo)

  const [deleteMode, setDeleteMode] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)

  function updateCombo(id: string) {
    const combo = combos.filter(combo => combo.id === id)

    if (combo.length === 0) return

    const comboSounds = combo[0].sounds

    const activeSoundsIds = comboSounds.map(sound => sound.id)

    const disabledSounds = sounds
      .filter(sound => !activeSoundsIds.includes(sound.id))
      .map(sound => ({ ...sound, active: false }))

    console.log(
      `
      theme: ${combo[0].theme}
      enabledSounds: ${comboSounds.map(sound => `${sound.id}:${sound.volume}`)}`
    )

    bulkUpdateSounds([...disabledSounds, ...comboSounds])
    setTheme(combo[0].theme)
  }

  useEffect(() => {
    setIsEmpty(combos.length === 0)
  }, [])

  useEffect(() => {
    setIsEmpty(combos.length === 0)
  }, [combos])

  return (
    <div className="z-40">
      <Menu>
        <Menu.Button
          title="Toggle combo list"
          data-umami-event="Open combo list"
          disabled={isEmpty}
          className={triggerButton({ theme })}
        >
          <PiPlaylistBold size={24} />
        </Menu.Button>
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
            className="snap absolute left-4 right-4 mt-2 flex max-h-[85vh] origin-top-right snap-y snap-mandatory scroll-pt-4 flex-col gap-1 overflow-y-auto rounded-2xl p-4 shadow-2xl backdrop-blur-md scrollbar-hide focus:outline-none md:left-auto md:right-0"
          >
            <div className={toggleEditContainer({ theme })}>
              <button
                onClick={() => setDeleteMode(false)}
                className={toggleEditButton({ theme, active: !deleteMode })}
              >
                Select
              </button>
              <button
                data-is-active={deleteMode}
                onClick={() => setDeleteMode(true)}
                className={toggleEditButton({ theme, active: deleteMode })}
              >
                Delete
              </button>
            </div>

            {!deleteMode &&
              combos.map(combo => (
                <Menu.Item key={combo.id}>
                  {({ active }) => (
                    <button
                      className={comboButton({ theme, active })}
                      onClick={() => updateCombo(combo.id)}
                      data-umami-event="Select combo"
                    >
                      <span className="font-bold">{combo.name}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}

            {deleteMode &&
              combos.map(combo => (
                <button
                  key={combo.id}
                  className={editButton({ theme })}
                  onClick={() => deleteCombo(combo.id)}
                  data-umami-event="Delete combo"
                >
                  <span className="font-bold">{combo.name}</span>
                  <FiTrash className="group-hover:text-red-600" />
                </button>
              ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
