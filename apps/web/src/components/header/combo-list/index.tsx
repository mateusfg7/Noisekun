import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { PiPlaylistBold } from "react-icons/pi";

import { useIsClient } from "~/hooks/use-is-client";
import { useComboStore } from "~/stores/combo-store";
import { useSoundsStateStore } from "~/stores/sounds-state-store";
import { useThemeStore } from "~/stores/theme-store";

export function ComboList() {
  const setTheme = useThemeStore((set) => set.setTheme);
  const sounds = useSoundsStateStore((state) => state.sounds);
  const bulkUpdateSounds = useSoundsStateStore((state) => state.bulkUpdate);
  const combos = useComboStore((state) => state.combos);
  const deleteCombo = useComboStore((state) => state.deleteCombo);

  const [deleteMode, setDeleteMode] = useState(false);
  // Combos are persisted in localStorage, so the server always renders the
  // list as empty; keep it that way until hydration finishes.
  const isClient = useIsClient();
  const isEmpty = !isClient || combos.length === 0;

  function updateCombo(id: string) {
    const matches = combos.filter((item) => item.id === id);

    if (matches.length === 0) {
      return;
    }

    const [combo] = matches;
    const comboSounds = combo.sounds;

    const activeSoundsIds = new Set(comboSounds.map((sound) => sound.id));

    const disabledSounds = sounds.flatMap((sound) =>
      activeSoundsIds.has(sound.id) ? [] : [{ ...sound, active: false }]
    );

    const enabledSounds = comboSounds.map(
      (sound) => `${sound.id}:${sound.volume}`
    );

    console.log(
      `
      theme: ${combo.theme}
      enabledSounds: ${enabledSounds}`
    );

    bulkUpdateSounds([...disabledSounds, ...comboSounds]);
    setTheme(combo.theme);
  }

  return (
    <div className="z-40" data-testid="combo-list">
      <Menu>
        <Menu.Button
          className="flex text-primary-foreground opacity-90 hover:opacity-100 disabled:opacity-50 disabled:hover:opacity-50"
          data-umami-event="Open combo list"
          disabled={isEmpty}
          title="Toggle combo list"
        >
          <PiPlaylistBold size={24} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="div"
            className="snap absolute left-4 right-4 mt-2 flex max-h-[85vh] origin-top-right snap-y snap-mandatory scroll-pt-4 flex-col gap-1 overflow-y-auto rounded-2xl p-4 shadow-2xl backdrop-blur-md scrollbar-hide focus:outline-none md:left-auto md:right-0"
            data-testid="combo-list-modal"
          >
            <div className="mb-2 flex min-w-40 items-center justify-around gap-1 rounded-lg bg-primary-foreground/5 text-primary-foreground">
              <button
                className="flex-1 rounded-lg py-1 hover:bg-primary-foreground/10 data-[is-active='true']:bg-primary-foreground/20"
                data-is-active={!deleteMode}
                onClick={() => setDeleteMode(false)}
                type="button"
              >
                Select
              </button>
              <button
                className="flex-1 rounded-lg py-1 hover:bg-primary-foreground/10 data-[is-active='true']:bg-primary-foreground/20"
                data-is-active={deleteMode}
                onClick={() => setDeleteMode(true)}
                type="button"
              >
                Delete
              </button>
            </div>

            {!deleteMode &&
              combos.map((combo) => (
                <Menu.Item key={combo.id}>
                  {({ active }) => (
                    <button
                      className="rounded-xl bg-primary-foreground/5 p-3 leading-none tracking-wider text-primary-foreground transition-colors duration-300 data-[is-active='true']:bg-primary-foreground/20"
                      data-is-active={active}
                      data-umami-event="Select combo"
                      onClick={() => updateCombo(combo.id)}
                      type="button"
                    >
                      <span className="font-bold">{combo.name}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}

            {deleteMode
              ? combos.map((combo) => (
                  <button
                    className="group flex items-center justify-between gap-1 rounded-xl bg-primary-foreground/5 bg-gradient-to-r p-3 leading-none tracking-wider text-primary-foreground transition-colors duration-300 hover:from-primary-foreground/20 hover:to-red-600/20 data-[is-active='true']:bg-primary-foreground/20"
                    data-testid={`${combo.id}_delete_button`}
                    data-umami-event="Delete combo"
                    key={combo.id}
                    onClick={() => deleteCombo(combo.id)}
                    type="button"
                  >
                    <span className="font-bold">{combo.name}</span>
                    <FiTrash className="group-hover:text-red-600" />
                  </button>
                ))
              : null}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
