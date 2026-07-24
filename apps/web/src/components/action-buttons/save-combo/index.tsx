import { useState } from "react";
import { FiCheck } from "react-icons/fi";

import { useComboStore } from "~/stores/combo-store";
import { useSoundsStateStore } from "~/stores/sounds-state-store";
import { useThemeStore } from "~/stores/theme-store";

import { randomString } from "~/utils/random-string";

import { actionButton } from "../styles";

export function SaveCombo() {
  const sounds = useSoundsStateStore((state) => state.sounds);
  const theme = useThemeStore((state) => state.theme);
  const saveCombo = useComboStore((state) => state.saveCombo);

  const [comboName, setComboName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showInput, setShowInput] = useState(false);

  function save() {
    if (!sounds.some((sound) => sound.active)) {
      return;
    }

    if (!showInput) {
      setShowInput(true);
      return;
    }

    if (!comboName) {
      return;
    }

    const activeSounds = sounds.filter((sound) => sound.active);

    saveCombo({
      id: randomString(6),
      name: comboName,
      sounds: activeSounds,
      theme,
    });

    setComboName("");
    setShowInput(false);
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 2000);
  }

  const disabled = showSuccess || !sounds.some((sound) => sound.active);

  return (
    <div className="flex gap-1">
      {showInput && (
        <input
          className="form-input w-32 animate-show-input rounded-xl border-none bg-primary-foreground/5 px-2 py-0 text-center text-primary-foreground leading-none tracking-wider duration-300 placeholder:text-primary-foreground/60 placeholder:text-sm focus:ring-0"
          data-testid="combo-name-input"
          disabled={disabled}
          onChange={(e) => setComboName(e.target.value)}
          placeholder="combo name..."
          type="text"
          value={comboName}
        />
      )}
      <button
        className={actionButton({
          className: /*tw:*/ "flex items-center",
        })}
        disabled={disabled}
        onClick={save}
        title="Save current combo"
      >
        {showSuccess ? (
          <span className="inline-flex w-10 justify-center">
            <FiCheck />
          </span>
        ) : (
          <span className="inline-flex w-10 justify-center">save</span>
        )}
      </button>
    </div>
  );
}
