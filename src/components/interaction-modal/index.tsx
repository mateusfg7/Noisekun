'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { useUserInteractionStore } from '@/stores/user-interaction-store'
import { useSoundsStateStore } from '@/stores/sounds-state-store'

export function InteractionModal() {
  const bulkSoundUpdate = useSoundsStateStore(state => state.bulkUpdate)
  const soundStates = useSoundsStateStore(state => state.sounds)

  const userHasInteracted = useUserInteractionStore(
    state => state.userHasInteracted
  )
  const setUserHasInteracted = useUserInteractionStore(
    state => state.setUserHasInteracted
  )

  function closeModal() {
    setUserHasInteracted(true)
  }

  function cancel() {
    const disabledSoundList = soundStates.map(sound => ({
      ...sound,
      active: false
    }))

    bulkSoundUpdate(disabledSoundList)
    closeModal()
  }

  return (
    <>
      <Transition appear show={!userHasInteracted} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[1px]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center text-zinc-950">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-fit transform flex-col gap-10 overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="flex flex-col items-start gap-10">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6"
                    >
                      New combo detected!
                    </Dialog.Title>
                  </div>
                  <div className="flex justify-end gap-1">
                    <button
                      onClick={cancel}
                      data-umami-event="Save pomodoro config"
                      className="rounded-lg px-5 py-3 text-lg leading-none text-red-950 transition-colors hover:bg-red-900 hover:text-red-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeModal}
                      data-umami-event="Save pomodoro config"
                      className="rounded-lg bg-green-100 px-5 py-3 text-lg leading-none text-green-950 transition-colors hover:bg-green-900 hover:text-green-100"
                    >
                      Play
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
