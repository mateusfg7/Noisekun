import { Button } from "@noisekun/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@noisekun/ui/components/dropdown-menu";
import { cn } from "@noisekun/ui/lib/utils";
import { PaintbrushIcon } from "lucide-react";
import { useMount } from "react-use";

import { useQueryState } from "~/hooks/use-query-state";
import { useThemeStore } from "~/stores/theme-store";
import type { Theme } from "~/stores/theme-store";

import { themeList } from "./theme-list";

const isTheme = (value: string | null): value is Theme =>
  themeList.some((theme) => theme.id === value);

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
    const themeOnStorage = localStorage.getItem("theme");

    if (isTheme(queryTheme)) {
      setTheme(queryTheme);
    } else if (isTheme(themeOnStorage)) {
      setTheme(themeOnStorage);
      setQueryTheme(themeOnStorage);
    } else {
      localStorage.setItem("theme", currentTheme);
    }
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            data-umami-event="Open theme menu"
            size="icon-pill"
            title="Toggle theme menu"
            variant="ghost"
          />
        }
      >
        <PaintbrushIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60"
        data-testid="theme-menu-container"
      >
        <DropdownMenuGroup>
          {themeList.map((theme) => (
            <DropdownMenuItem
              aria-current={currentTheme === theme.id}
              className="group/theme"
              data-umami-event={`Select ${theme.title} Theme`}
              key={theme.id}
              onClick={() => handleTheme(theme.id)}
            >
              <span
                className={cn(
                  "flex h-20 w-full items-center justify-center rounded-lg border-2 border-transparent bg-cover bg-center text-lg font-bold shadow-md transition group-focus/theme:brightness-110 group-aria-[current=true]/theme:border-current",
                  theme.preview
                )}
              >
                {theme.title}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
