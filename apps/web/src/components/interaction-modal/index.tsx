"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@noisekun/ui/components/alert-dialog";

import { useSoundsStateStore } from "~/stores/sounds-state-store";
import { useUserInteractionStore } from "~/stores/user-interaction-store";

/**
 * Browsers block autoplay until the user interacts with the page, so a shared
 * combo link asks for a click before its sounds start.
 */
export function InteractionModal() {
  const bulkSoundUpdate = useSoundsStateStore((state) => state.bulkUpdate);
  const soundStates = useSoundsStateStore((state) => state.sounds);

  const userHasInteracted = useUserInteractionStore(
    (state) => state.userHasInteracted
  );

  const setUserHasInteracted = useUserInteractionStore(
    (state) => state.setUserHasInteracted
  );

  function play() {
    setUserHasInteracted(true);
  }

  function cancel() {
    bulkSoundUpdate(soundStates.map((sound) => ({ ...sound, active: false })));
    setUserHasInteracted(true);
  }

  return (
    <AlertDialog
      onOpenChange={(open) => {
        if (!open) {
          cancel();
        }
      }}
      open={!userHasInteracted}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>New combo detected!</AlertDialogTitle>
          <AlertDialogDescription>
            This link comes with a sound combo. Play it?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data-umami-event="Cancel combo">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction data-umami-event="Play combo" onClick={play}>
            Play
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
