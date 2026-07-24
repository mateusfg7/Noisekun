import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { PiPlaylistBold } from 'react-icons/pi'
import { FiTrash } from 'react-icons/fi'

import { useThemeStore } from '~/stores/theme-store'
import { useComboStore } from '~/stores/combo-store'
import { useSoundsStateStore } from '~/stores/sounds-state-store'

export function ComboList() {
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
    <div data-testid="combo-list" className="z-40">
      <Menu>
        <Menu.Button
          title="Toggle combo list"
          data-umami-event="Open combo list"
          disabled={isEmpty}
          className="flex text-primary-foreground opacity-90 hover:opacity-100 disabled:opacity-50 disabled:hover:opacity-50"
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
            data-testid="combo-list-modal"
            className="snap absolute left-4 right-4 mt-2 flex max-h-[85vh] origin-top-right snap-y snap-mandatory scroll-pt-4 flex-col gap-1 overflow-y-auto rounded-2xl p-4 shadow-2xl backdrop-blur-md scrollbar-hide focus:outline-none md:left-auto md:right-0"
          >
            <div className="mb-2 flex min-w-40 items-center justify-around gap-1 rounded-lg bg-primary-foreground/5 text-primary-foreground">
              <button
                onClick={() => setDeleteMode(false)}
                data-is-active={!deleteMode}
                className="flex-1 rounded-lg py-1 hover:bg-primary-foreground/10 data-[is-active='true']:bg-primary-foreground/20"
              >
                Select
              </button>
              <button
                data-is-active={deleteMode}
                onClick={() => setDeleteMode(true)}
                className="flex-1 rounded-lg py-1 hover:bg-primary-foreground/10 data-[is-active='true']:bg-primary-foreground/20"
              >
                Delete
              </button>
            </div>

            {!deleteMode &&
              combos.map(combo => (
                <Menu.Item key={combo.id}>
                  {({ active }) => (
                    <button
                      className="rounded-xl bg-primary-foreground/5 p-3 leading-none tracking-wider text-primary-foreground duration-300 data-[is-active='true']:bg-primary-foreground/20"
                      onClick={() => updateCombo(combo.id)}
                      data-is-active={active}
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
                  className="group flex items-center justify-between gap-1 rounded-xl bg-primary-foreground/5 bg-gradient-to-r p-3 leading-none tracking-wider text-primary-foreground duration-300 hover:from-primary-foreground/20 hover:to-red-600/20 data-[is-active='true']:bg-primary-foreground/20"
                  onClick={() => deleteCombo(combo.id)}
                  data-umami-event="Delete combo"
                  data-testid={`${combo.id}_delete_button`}
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
