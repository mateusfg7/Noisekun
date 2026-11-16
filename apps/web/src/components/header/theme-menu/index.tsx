import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { PiPaintBrushBroadBold } from "react-icons/pi";
import { useMount } from "react-use";

import { useQueryState } from "~/hooks/use-query-state";
import { useThemeStore } from "~/stores/theme-store";
import type { Theme } from "~/stores/theme-store";

import { themeButton } from "./styles";
import { themeList } from "./theme-list";

export function ThemeMenu() {
  const setTheme = useThemeStore((set) => set.setTheme);
  const currentTheme = useThemeStore((set) => set.theme);
  const [queryTheme, setQueryTheme] = useQueryState("theme");

  function handleTheme(newTheme: Theme) {
    setTheme(newTheme);
    setQueryTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  // Restore the theme once on load (URL first, then localStorage). This must
  // not re-run on theme changes: combos set the theme without touching the
  // URL, and re-running would revert them to the stale query value.
  useMount(() => {
    const themeOnStorage = localStorage.getItem("theme") as Theme;
    if (queryTheme) {
      setTheme(queryTheme as Theme);
    } else if (themeOnStorage) {
      setTheme(themeOnStorage);
      setQueryTheme(themeOnStorage);
    } else {
      localStorage.setItem("theme", currentTheme);
    }
  });

  return (
    <div className="z-40">
      <Menu>
        <div className="group flex">
          <Menu.Button
            className="flex text-primary-foreground opacity-90 group-hover:opacity-100"
            data-umami-event="Open theme menu"
            title="Toggle theme menu"
          >
            <PiPaintBrushBroadBold size={22} />
          </Menu.Button>
        </div>
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
            className="snap absolute left-4 right-4 mt-2 flex max-h-[85vh] origin-top-right snap-y snap-mandatory scroll-pt-4 flex-col gap-4 overflow-y-auto rounded-2xl p-4 shadow-2xl backdrop-blur-md scrollbar-hide focus:outline-none md:left-auto md:right-0"
            data-testid="theme-menu-container"
          >
            {themeList.map((theme) => (
              <div className="min-w-max snap-start" key={theme.id}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={themeButton({
                        active,
                        background: theme.id,
                        selected: currentTheme === theme.id,
                        theme: theme.id,
                      })}
                      data-umami-event={`Select ${theme.title} Theme`}
                      onClick={() => handleTheme(theme.id)}
                      type="button"
                    >
                      {theme.title}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
