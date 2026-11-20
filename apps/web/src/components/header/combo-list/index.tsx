import { Button } from "@noisekun/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@noisekun/ui/components/dropdown-menu";
import { ListMusicIcon, Trash2Icon } from "lucide-react";

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

  // Combos are persisted in localStorage, so the server always renders the
  // list as empty; keep it that way until hydration finishes.
  const isClient = useIsClient();
  const isEmpty = !isClient || combos.length === 0;

  function updateCombo(id: string) {
    const combo = combos.find((item) => item.id === id);

    if (!combo) {
      return;
    }

    const comboSounds = combo.sounds;

    const activeSoundsIds = new Set(comboSounds.map((sound) => sound.id));

    const disabledSounds = sounds.flatMap((sound) =>
      activeSoundsIds.has(sound.id) ? [] : [{ ...sound, active: false }]
    );

    bulkUpdateSounds([...disabledSounds, ...comboSounds]);
    setTheme(combo.theme);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        data-testid="combo-list"
        disabled={isEmpty}
        render={
          <Button
            data-umami-event="Open combo list"
            size="icon-pill"
            title="Toggle combo list"
            variant="ghost"
          />
        }
      >
        <ListMusicIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-52"
        data-testid="combo-list-modal"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Combos</DropdownMenuLabel>
          {combos.map((combo) => (
            <DropdownMenuItem
              data-umami-event="Select combo"
              key={combo.id}
              onClick={() => updateCombo(combo.id)}
            >
              <span className="truncate font-semibold">{combo.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Trash2Icon />
            Delete combo
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-52">
            <DropdownMenuGroup>
              {combos.map((combo) => (
                <DropdownMenuItem
                  closeOnClick={false}
                  data-testid={`${combo.id}_delete_button`}
                  data-umami-event="Delete combo"
                  key={combo.id}
                  onClick={() => deleteCombo(combo.id)}
                  variant="destructive"
                >
                  <Trash2Icon />
                  <span className="truncate">{combo.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
