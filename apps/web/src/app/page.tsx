"use client";

import { useMount } from "react-use";

import { ActionButtons } from "~/components/action-buttons";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { InteractionModal } from "~/components/interaction-modal";
import { SoundButton } from "~/components/sound";
import { sounds } from "~/data/sounds";
import { useQueryState } from "~/hooks/use-query-state";
import { useThemeStore } from "~/stores/theme-store";
import { useUserInteractionStore } from "~/stores/user-interaction-store";

export default function Home() {
  const currTheme = useThemeStore((set) => set.theme);

  const setUserHasInteracted = useUserInteractionStore(
    (state) => state.setUserHasInteracted
  );

  const [querySounds] = useQueryState("sounds");

  // Only the initial URL matters: a shared link with sounds needs a click
  // before autoplay is allowed, anything else counts as interacted.
  useMount(() => {
    if (!querySounds.length) {
      setUserHasInteracted(true);
    }
  });

  return (
    <div className={currTheme}>
      <div className="bg-background-image bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="relative min-h-dvh bg-background-color">
          <div className="mx-auto flex min-h-dvh w-fit flex-col justify-between gap-16 px-5 pt-2">
            <Header />
            <main className="flex flex-1 flex-col gap-3">
              <ActionButtons />
              <div className="mx-auto grid w-fit grid-cols-2 gap-6 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {sounds.map((sound) => (
                  <SoundButton key={sound.id} sound={sound} />
                ))}
              </div>
            </main>
            <Footer />
          </div>
          <InteractionModal />
        </div>
      </div>
    </div>
  );
}
