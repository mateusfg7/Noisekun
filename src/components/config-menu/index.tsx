import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

import { useGlobalRandomModeStore } from '~/stores/random-mode-store'

import { TriggerButton } from './trigger-button'
import { ModalTile } from './modal-title'
import { ActionButtons } from './action-buttons'
import { Overlay } from './overlay'
import { ModalTransitionFragment } from './modal-transition-fragment'

import { RandomVolumeSettings } from './options/random-volume-settings'

type Action = {
  save: () => void
  reset: () => void
}

export function ConfigMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const randomModeStore = useGlobalRandomModeStore()

  const settingStates = {
    randomModeUpdateInterval: useState(randomModeStore.updateIntervalInMs),
    randomModeUpdateSteps: useState(randomModeStore.updateSteps),
    randomModeTransitionTime: useState(randomModeStore.updateTransitionTimeInMs)
  }

  const randomModeTransitionTime: Action = {
    save: () => {
      randomModeStore.setUpdateTransitionTime(
        settingStates.randomModeTransitionTime[0]
      )
    },
    reset: () => {
      settingStates.randomModeTransitionTime[1](
        randomModeStore.updateTransitionTimeInMs
      )
    }
  }

  const randomModeUpdateInterval: Action = {
    save: () => {
      randomModeStore.setUpdateInterval(
        settingStates.randomModeUpdateInterval[0]
      )
    },
    reset: () => {
      settingStates.randomModeUpdateInterval[1](
        randomModeStore.updateIntervalInMs
      )
    }
  }

  const randomModeUpdateSteps: Action = {
    save: () => {
      randomModeStore.setUpdateSteps(settingStates.randomModeUpdateSteps[0])
    },
    reset: () => [
      settingStates.randomModeUpdateSteps[1](randomModeStore.updateSteps)
    ]
  }

  const actionList: Action[] = [
    randomModeUpdateInterval,
    randomModeUpdateSteps,
    randomModeTransitionTime
  ]

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function handleSave() {
    actionList.forEach(action => action.save())
    closeModal()
  }

  function handleCancel() {
    actionList.forEach(action => action.reset())
    closeModal()
  }

  useEffect(() => {
    settingStates.randomModeUpdateInterval[1](
      randomModeStore.updateIntervalInMs
    )
  }, [randomModeStore.updateIntervalInMs])

  return (
    <>
      <TriggerButton openModal={openModal} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Overlay />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center text-zinc-950">
              <ModalTransitionFragment>
                <Dialog.Panel className="flex w-[98%] transform flex-col gap-10 overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all md:w-80">
                  <div className="flex flex-col items-start gap-10">
                    <ModalTile />
                    <div className="w-full">
                      <RandomVolumeSettings
                        updateInterval={{
                          value: settingStates.randomModeUpdateInterval[0],
                          set: settingStates.randomModeUpdateInterval[1]
                        }}
                        updateSteps={{
                          value: settingStates.randomModeUpdateSteps[0],
                          set: settingStates.randomModeUpdateSteps[1]
                        }}
                        updateTransitionTime={{
                          value: settingStates.randomModeTransitionTime[0],
                          set: settingStates.randomModeTransitionTime[1]
                        }}
                      />
                    </div>
                  </div>
                  <ActionButtons onCancel={handleCancel} onSave={handleSave} />
                </Dialog.Panel>
              </ModalTransitionFragment>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
