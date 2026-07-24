import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { PiPlaylistBold } from "react-icons/pi";
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
  const [isEmpty, setIsEmpty] = useState(true);

  function updateCombo(id: string) {
    const combo = combos.filter((combo) => combo.id === id);

    if (combo.length === 0) {
      return;
    }

    const comboSounds = combo[0].sounds;

    const activeSoundsIds = comboSounds.map((sound) => sound.id);

    const disabledSounds = sounds
      .filter((sound) => !activeSoundsIds.includes(sound.id))
      .map((sound) => ({ ...sound, active: false }));

    console.log(
      `
      theme: ${combo[0].theme}
      enabledSounds: ${comboSounds.map((sound) => `${sound.id}:${sound.volume}`)}`
    );

    bulkUpdateSounds([...disabledSounds, ...comboSounds]);
    setTheme(combo[0].theme);
  }

  useEffect(() => {
    setIsEmpty(combos.length === 0);
  }, []);

  useEffect(() => {
    setIsEmpty(combos.length === 0);
  }, [combos]);

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
            className="snap scrollbar-hide absolute right-4 left-4 mt-2 flex max-h-[85vh] origin-top-right snap-y snap-mandatory scroll-pt-4 flex-col gap-1 overflow-y-auto rounded-2xl p-4 shadow-2xl backdrop-blur-md focus:outline-none md:right-0 md:left-auto"
            data-testid="combo-list-modal"
          >
            <div className="mb-2 flex min-w-40 items-center justify-around gap-1 rounded-lg bg-primary-foreground/5 text-primary-foreground">
              <button
                className="flex-1 rounded-lg py-1 hover:bg-primary-foreground/10 data-[is-active='true']:bg-primary-foreground/20"
                data-is-active={!deleteMode}
                onClick={() => setDeleteMode(false)}
              >
                Select
              </button>
              <button
                className="flex-1 rounded-lg py-1 hover:bg-primary-foreground/10 data-[is-active='true']:bg-primary-foreground/20"
                data-is-active={deleteMode}
                onClick={() => setDeleteMode(true)}
              >
                Delete
              </button>
            </div>

            {!deleteMode &&
              combos.map((combo) => (
                <Menu.Item key={combo.id}>
                  {({ active }) => (
                    <button
                      className="rounded-xl bg-primary-foreground/5 p-3 text-primary-foreground leading-none tracking-wider duration-300 data-[is-active='true']:bg-primary-foreground/20"
                      data-is-active={active}
                      data-umami-event="Select combo"
                      onClick={() => updateCombo(combo.id)}
                    >
                      <span className="font-bold">{combo.name}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}

            {deleteMode &&
              combos.map((combo) => (
                <button
                  className="group flex items-center justify-between gap-1 rounded-xl bg-gradient-to-r bg-primary-foreground/5 p-3 text-primary-foreground leading-none tracking-wider duration-300 hover:from-primary-foreground/20 hover:to-red-600/20 data-[is-active='true']:bg-primary-foreground/20"
                  data-testid={`${combo.id}_delete_button`}
                  data-umami-event="Delete combo"
                  key={combo.id}
                  onClick={() => deleteCombo(combo.id)}
                >
                  <span className="font-bold">{combo.name}</span>
                  <FiTrash className="group-hover:text-red-600" />
                </button>
              ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
