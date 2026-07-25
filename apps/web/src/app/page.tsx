"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    if (!querySounds.length) {
      setUserHasInteracted(true);
    }
  }, []);

  return (
    <div className={currTheme}>
      <div className="bg-background-image bg-center bg-cover bg-fixed bg-no-repeat">
        <div className="relative bg-background-color">
          <Header />
          <div className="styled-scrollbar h-[90vh] space-y-24 overflow-y-scroll pt-16 md:h-[87vh]">
            <div className="m-auto flex w-7/12 flex-col items-center gap-3 lg:max-w-4xl">
              <ActionButtons />
              <div className="flex flex-wrap justify-center gap-12">
                {sounds.map((sound) => (
                  <SoundButton key={sound.id} sound={sound} />
                ))}
              </div>
            </div>
            <Footer />
            <InteractionModal />
          </div>
        </div>
      </div>
    </div>
  );
}
