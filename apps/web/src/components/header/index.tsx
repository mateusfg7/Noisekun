import Link from "next/link";
import type React from "react";

import { ConfigMenu } from "~/components/config-menu";

import { ComboList } from "./combo-list";
import { GlobalVolumeController } from "./global-volume-controller";
import { RandomModeButton } from "./random-controller";
import { ThemeMenu } from "./theme-menu";

export const Header: React.FC = () => (
  <header className="border-foreground/10 bg-foreground/10 sticky top-2 z-40 flex items-center justify-between gap-5 rounded-full border py-1.5 pr-2 pl-5 shadow-md shadow-black/5 backdrop-blur-lg">
    <h1 className="text-foreground text-xl leading-none font-semibold">
      <Link href="/">Noisekun</Link>
    </h1>
    <div className="flex items-center gap-1">
      <GlobalVolumeController />
      <RandomModeButton />
      <ThemeMenu />
      <ComboList />
      <ConfigMenu />
    </div>
  </header>
);
