import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  const settingStates = {
    randomModeTransitionTime: useState(
      randomModeStore.updateTransitionTimeInMs
    ),
    randomModeUpdateInterval: useState(randomModeStore.updateIntervalInMs),
    randomModeUpdateSteps: useState(randomModeStore.updateSteps),
  };

  const randomModeTransitionTime: Action = {
    reset: () => {
      settingStates.randomModeTransitionTime[1](
        randomModeStore.updateTransitionTimeInMs
      );
    },
    save: () => {
      const transitionTimeInMs = settingStates.randomModeTransitionTime[0];

      const MAX_TRANSITION_TIME =
        settingStates.randomModeUpdateInterval[0] - 1000;
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
      settingStates.randomModeTransitionTime[0] !=
      randomModeStore.updateTransitionTimeInMs,
  };

  const randomModeUpdateInterval: Action = {
    reset: () => {
      settingStates.randomModeUpdateInterval[1](
        randomModeStore.updateIntervalInMs
      );
    },
    save: () => {
      const updateIntervalInMs = settingStates.randomModeUpdateInterval[0];

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
    wasChanged: () =>
      settingStates.randomModeUpdateInterval[0] !=
      randomModeStore.updateIntervalInMs,
  };

  const randomModeUpdateSteps: Action = {
    reset: () => {
      settingStates.randomModeUpdateSteps[1](randomModeStore.updateSteps);
    },
    save: () => {
      randomModeStore.setUpdateSteps(settingStates.randomModeUpdateSteps[0]);
      return {};
    },
    wasChanged: () =>
      settingStates.randomModeUpdateSteps[0] != randomModeStore.updateSteps,
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
      errors.forEach(({ error }) => toast.error(error));
    } else {
      closeModal();
    }
  }

  function handleCancel() {
    actionList.forEach((action) => action.reset());
    closeModal();
  }

  useEffect(() => {
    settingStates.randomModeUpdateInterval[1](
      randomModeStore.updateIntervalInMs
    );
  }, [randomModeStore.updateIntervalInMs]);

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
                          set: settingStates.randomModeUpdateInterval[1],
                          value: settingStates.randomModeUpdateInterval[0],
                          wasChanged: randomModeUpdateInterval.wasChanged,
                        }}
                        updateSteps={{
                          set: settingStates.randomModeUpdateSteps[1],
                          value: settingStates.randomModeUpdateSteps[0],
                          wasChanged: randomModeUpdateSteps.wasChanged,
                        }}
                        updateTransitionTime={{
                          set: settingStates.randomModeTransitionTime[1],
                          value: settingStates.randomModeTransitionTime[0],
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
