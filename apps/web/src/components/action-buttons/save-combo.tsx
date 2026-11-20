import { Button } from "@noisekun/ui/components/button";
import { Input } from "@noisekun/ui/components/input";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

import { useComboStore } from "~/stores/combo-store";
import { useSoundsStateStore } from "~/stores/sounds-state-store";
import { useThemeStore } from "~/stores/theme-store";
import { randomString } from "~/utils/random-string";

const SUCCESS_FEEDBACK_MS = 2000;

export function SaveCombo() {
  const sounds = useSoundsStateStore((state) => state.sounds);
  const theme = useThemeStore((state) => state.theme);
  const saveCombo = useComboStore((state) => state.saveCombo);

  const [comboName, setComboName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const activeSounds = sounds.filter((sound) => sound.active);
  const disabled = showSuccess || activeSounds.length === 0;

  function save() {
    if (activeSounds.length === 0) {
      return;
    }

    if (!showInput) {
      setShowInput(true);

      return;
    }

    if (!comboName) {
      return;
    }

    saveCombo({
      id: randomString(6),
      name: comboName,
      sounds: activeSounds,
      theme,
    });

    setComboName("");
    setShowInput(false);
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), SUCCESS_FEEDBACK_MS);
  }

  return (
    <form
      className="flex gap-1"
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
    >
      {showInput ? (
        <Input
          aria-label="Combo name"
          autoFocus
          className="h-6 w-32"
          data-testid="combo-name-input"
          disabled={disabled}
          onChange={(event) => setComboName(event.target.value)}
          placeholder="combo name..."
          value={comboName}
        />
      ) : null}
      <Button
        disabled={disabled}
        size="pill"
        title="Save current combo"
        type="submit"
        variant="secondary"
      >
        <span className="inline-flex w-8 justify-center">
          {showSuccess ? <CheckIcon aria-label="Saved" /> : "save"}
        </span>
      </Button>
    </form>
  );
}
