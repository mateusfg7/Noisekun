import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";

import { useGlobalRandomModeStore } from "~/stores/random-mode-store";

import { ActionButtons } from "./action-buttons";
import { ModalTile } from "./modal-title";
import { ModalTransitionFragment } from "./modal-transition-fragment";
import { RandomVolumeSettings } from "./options/random-volume-settings";
import { Overlay } from "./overlay";
import { TriggerButton } from "./trigger-button";

type Action = {
  save: () => { error?: string };
  reset: () => void;
  wasChanged: () => boolean;
};

export function ConfigMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const randomModeStore = useGlobalRandomModeStore();

  const [transitionTime, setTransitionTime] = useState(
    randomModeStore.updateTransitionTimeInMs
  );
  const [updateInterval, setUpdateInterval] = useState(
    randomModeStore.updateIntervalInMs
  );
  const [updateSteps, setUpdateSteps] = useState(randomModeStore.updateSteps);

  const randomModeTransitionTime: Action = {
    reset: () => {
      setTransitionTime(randomModeStore.updateTransitionTimeInMs);
    },
    save: () => {
      const transitionTimeInMs = transitionTime;

      const MAX_TRANSITION_TIME = updateInterval - 1000;
      const MIN_TRANSITION_TIME = 1000; // 1 second

      if (transitionTimeInMs < MIN_TRANSITION_TIME) {
        return {
          error: `Transition time cannot be lesser than ${
            MIN_TRANSITION_TIME / 1000
          } seconds`,
        };
      }

      if (transitionTimeInMs > MAX_TRANSITION_TIME) {
        return {
          error: `Transition time cannot be greater than ${
            MAX_TRANSITION_TIME / 1000
          } seconds (i.e. update interval - 1 second)`,
        };
      }

      randomModeStore.setUpdateTransitionTime(transitionTimeInMs);
      return {};
    },
    wasChanged: () =>
      transitionTime !== randomModeStore.updateTransitionTimeInMs,
  };

  const randomModeUpdateInterval: Action = {
    reset: () => {
      setUpdateInterval(randomModeStore.updateIntervalInMs);
    },
    save: () => {
      const updateIntervalInMs = updateInterval;

      const MIN_INTERVAL = 5 * 1000; // 5 seconds
      const MAX_INTERVAL = 10 * 60 * 1000; // 10 minutes

      if (updateIntervalInMs < MIN_INTERVAL) {
        return {
          error: `Update interval cannot be lesser than ${
            MIN_INTERVAL / 1000
          } seconds`,
        };
      }

      if (updateIntervalInMs > MAX_INTERVAL) {
        return {
          error: `Update interval cannot be greater than ${
            MAX_INTERVAL / 1000
          } seconds`,
        };
      }

      randomModeStore.setUpdateInterval(updateIntervalInMs);
      return {};
    },
    wasChanged: () => updateInterval !== randomModeStore.updateIntervalInMs,
  };

  const randomModeUpdateSteps: Action = {
    reset: () => {
      setUpdateSteps(randomModeStore.updateSteps);
    },
    save: () => {
      randomModeStore.setUpdateSteps(updateSteps);
      return {};
    },
    wasChanged: () => updateSteps !== randomModeStore.updateSteps,
  };

  const actionList: Action[] = [
    randomModeUpdateInterval,
    randomModeUpdateSteps,
    randomModeTransitionTime,
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleSave() {
    const errors = actionList
      .map((action) => action.save())
      .filter((err) => err.error);

    if (errors.length > 0) {
      for (const { error } of errors) {
        if (error) {
          toast.error(error);
        }
      }
    } else {
      closeModal();
    }
  }

  function handleCancel() {
    for (const action of actionList) {
      action.reset();
    }
    closeModal();
  }

  return (
    <>
      <TriggerButton openModal={openModal} />

      <Transition appear as={Fragment} show={isOpen}>
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
                          set: setUpdateInterval,
                          value: updateInterval,
                          wasChanged: randomModeUpdateInterval.wasChanged,
                        }}
                        updateSteps={{
                          set: setUpdateSteps,
                          value: updateSteps,
                          wasChanged: randomModeUpdateSteps.wasChanged,
                        }}
                        updateTransitionTime={{
                          set: setTransitionTime,
                          value: transitionTime,
                          wasChanged: randomModeTransitionTime.wasChanged,
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
  );
}
