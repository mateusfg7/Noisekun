"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export function ConfirmationModal({ showModal, setShowModal }: Props) {
  const closeModal = () => setShowModal(false);

  return (
    <Transition appear as={Fragment} show={showModal}>
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
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xs" />
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
              <Dialog.Panel className="flex w-fit transform flex-col gap-10 overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition">
                <div className="flex flex-col items-start gap-10">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6"
                  >
                    Combo url copied to clipboard.
                  </Dialog.Title>
                </div>
                <div className="flex justify-end gap-1">
                  <button
                    className="bg-dark-background/10 text-dark-background hover:bg-dark-background hover:text-light-background w-full rounded-lg px-5 py-4 text-lg leading-none transition-colors md:w-fit md:py-3"
                    data-umami-event="Confirm copy combo URL"
                    onClick={closeModal}
                    type="button"
                  >
                    Ok, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
