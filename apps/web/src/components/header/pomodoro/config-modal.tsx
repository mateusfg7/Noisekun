import { Button } from "@noisekun/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@noisekun/ui/components/dialog";
import { Field, FieldLabel } from "@noisekun/ui/components/field";
import { Input } from "@noisekun/ui/components/input";
import { useState } from "react";

import { padZero } from "~/utils/pad-zero";

const DEFAULT_MINUTES = 25;
const MAX_MINUTES = 99;

export type ConfigModalProps = {
  displayMinutes: string;
  displaySeconds: string;
  minutes: string;
  isLoading: boolean;
  setMinutes: (minutes: number) => void;
};

export function ConfigModal({
  minutes,
  isLoading,
  setMinutes,
  displayMinutes,
  displaySeconds,
}: ConfigModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localMinutes, setLocalMinutes] = useState(Number(minutes));

  function handleOpenChange(open: boolean) {
    // Start from the current duration every time the dialog opens.
    if (open) {
      setLocalMinutes(Number(minutes));
    }

    setIsOpen(open);
  }

  function handleSave() {
    setMinutes(Math.max(localMinutes, 1));
    setIsOpen(false);
  }

  function updateTime(value: string) {
    const time = Number(value);

    if (Number.isFinite(time)) {
      setLocalMinutes(Math.min(Math.max(Math.trunc(time), 0), MAX_MINUTES));
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <div
        className="flex items-center justify-center"
        data-testid="pomodoro-timer"
      >
        <DialogTrigger
          render={
            <Button
              aria-label={`Pomodoro timer ${displayMinutes}:${displaySeconds}, open configuration`}
              data-testid="pomodoro-timer-button"
              data-umami-event="Open pomodoro config"
              disabled={isLoading}
              size="pill"
              title="Pomodoro timer"
              variant="secondary"
            />
          }
        >
          <span className="tabular-nums">
            <span className="font-bold">{displayMinutes}</span>
            <span>:</span>
            <span className="font-bold">{displaySeconds}</span>
          </span>
        </DialogTrigger>
      </div>

      <DialogContent data-testid="config-modal" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Pomodoro configuration</DialogTitle>
        </DialogHeader>
        <Field orientation="horizontal">
          <FieldLabel className="flex-1" htmlFor="minutes">
            Minutes
          </FieldLabel>
          <Input
            className="w-20 text-center"
            data-testid="minutes-input"
            id="minutes"
            inputMode="numeric"
            onChange={(event) => updateTime(event.target.value)}
            value={padZero(localMinutes)}
          />
        </Field>
        <DialogFooter>
          <Button
            data-umami-event="Reset pomodoro config"
            onClick={() => setLocalMinutes(DEFAULT_MINUTES)}
            variant="ghost"
          >
            Reset
          </Button>
          <Button data-umami-event="Save pomodoro config" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
