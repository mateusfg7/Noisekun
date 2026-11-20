import { Button } from "@noisekun/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@noisekun/ui/components/dialog";
import { SettingsIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useGlobalRandomModeStore } from "~/stores/random-mode-store";

import { RandomVolumeSettings } from "./options/random-volume-settings";

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

  function handleSave() {
    const errors = actionList.flatMap(({ save }) => save().error ?? []);

    if (errors.length > 0) {
      for (const error of errors) {
        toast.error(error);
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
    <Dialog
      onOpenChange={(open) => (open ? setIsOpen(true) : handleCancel())}
      open={isOpen}
    >
      <DialogTrigger
        render={
          <Button
            data-umami-event="Open config menu"
            size="icon-pill"
            title="Open config menu"
            variant="ghost"
          />
        }
      >
        <SettingsIcon />
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <RandomVolumeSettings
          updateInterval={{
            set: setUpdateInterval,
            value: updateInterval,
            wasChanged: randomModeUpdateInterval.wasChanged(),
          }}
          updateSteps={{
            set: setUpdateSteps,
            value: updateSteps,
            wasChanged: randomModeUpdateSteps.wasChanged(),
          }}
          updateTransitionTime={{
            set: setTransitionTime,
            value: transitionTime,
            wasChanged: randomModeTransitionTime.wasChanged(),
          }}
        />
        <DialogFooter>
          <Button
            data-umami-event="Reset config"
            onClick={handleCancel}
            variant="ghost"
          >
            Cancel
          </Button>
          <Button data-umami-event="Save config" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
