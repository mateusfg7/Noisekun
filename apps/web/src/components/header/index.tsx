import Link from "next/link";
import type React from "react";

import { ConfigMenu } from "~/components/config-menu";

import { ComboList } from "./combo-list";
import { GlobalVolumeController } from "./global-volume-controller";
import { RandomModeButton } from "./random-controller";
import { ThemeMenu } from "./theme-menu";

export const Header: React.FC = () => (
  <header className="sticky top-2 z-40 flex items-center justify-between gap-5 rounded-full border border-primary-foreground/10 bg-primary-foreground/10 py-1.5 pl-5 pr-2 shadow-md shadow-black/5 backdrop-blur-lg">
    <h1 className="text-xl font-semibold leading-none text-primary-foreground">
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
