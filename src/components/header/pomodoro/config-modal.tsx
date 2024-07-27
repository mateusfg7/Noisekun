import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { padZero } from '~/utils/pad-zero'

export type ConfigModalProps = {
  displayMinutes: string
  displaySeconds: string
  minutes: string
  isLoading: boolean
  setMinutes: (minutes: number) => void
}

export function ConfigModal({
  minutes,
  isLoading,
  setMinutes,
  displayMinutes,
  displaySeconds
}: ConfigModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [localMinutes, setLocalMinutes] = useState(+minutes)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function handleSave() {
    if (localMinutes < 1) setMinutes(1)
    else setMinutes(localMinutes)
    closeModal()
  }
  function handleReset() {
    updateTime(25)
  }

  function updateTime(time: number) {
    if (time >= 99) setLocalMinutes(99)
    else setLocalMinutes(time)
  }

  return (
    <>
      <div
        data-testid="pomodoro-timer"
        className="flex items-center justify-center"
      >
        <button
          type="button"
          onClick={openModal}
          disabled={isLoading}
          data-is-loading={isLoading}
          className="rounded-xl bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/30 disabled:hover:bg-primary-foreground/10 data-[is-loading='true']:animate-pulse data-[is-loading='true']:cursor-wait"
          data-umami-event="Open pomodoro config"
          data-testid="pomodoro-timer-button"
        >
          <div
            title="Pomodoro timer"
            className="flex items-center gap-1 p-2 text-xl leading-none"
          >
            <span className="font-bold">{displayMinutes}</span>
            <span>:</span>
            <span className="font-bold">{displaySeconds}</span>
          </div>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel
                  data-testid="config-modal"
                  className="flex w-fit transform flex-col gap-10 overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"
                >
                  <div className="flex flex-col items-start gap-10">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6"
                    >
                      Pomodoro Configuration
                    </Dialog.Title>
                    <div className="w-full text-2xl">
                      <div className="flex w-full items-center justify-between gap-4">
                        <label htmlFor="minutes">Minutes:</label>
                        <input
                          type="text"
                          id="minutes"
                          data-testid="minutes-input"
                          value={padZero(localMinutes)}
                          onChange={e => {
                            if (e.target.value === '0' || !e.target.value) {
                              updateTime(0)
                              return
                            }
                            if (+e.target.value) updateTime(+e.target.value)
                          }}
                          className="form-input w-20 rounded-lg p-3 text-center text-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-1">
                    <button
                      onClick={handleReset}
                      data-umami-event="Reset pomodoro config"
                      className="rounded-lg px-5 py-3 text-lg leading-none text-red-800 transition-colors hover:bg-red-800 hover:text-red-100"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleSave}
                      data-umami-event="Save pomodoro config"
                      className="rounded-lg bg-green-100 px-5 py-3 text-lg leading-none text-green-950 transition-colors hover:bg-green-900 hover:text-green-100"
                    >
                      Save
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
