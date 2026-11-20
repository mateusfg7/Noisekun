import type { Theme } from "~/stores/theme-store";

type ThemeAttrs = {
  title: string;
  id: Theme;
  /**
   * Classes for the theme's preview card. The text color is `!important`
   * because menu items recolor their children on focus.
   */
  preview: string;
};

export const themeList: ThemeAttrs[] = [
  {
    id: "light-theme",
    preview: "bg-theme-light text-theme-light-ink!",
    title: "Light",
  },
  {
    id: "dark-theme",
    preview: "bg-theme-dark text-theme-dark-ink!",
    title: "Dark",
  },
  {
    id: "transition-theme",
    preview: "animate-background-change-sm text-theme-transition!",
    title: "Transition",
  },
  {
    id: "room-theme",
    preview: "bg-preview-room text-theme-room!",
    title: "Room",
  },
  {
    id: "train-theme",
    preview: "bg-preview-train text-theme-train!",
    title: "Train",
  },
  {
    id: "waterfall-theme",
    preview: "bg-preview-waterfall text-theme-waterfall!",
    title: "Waterfall",
  },
  {
    id: "camping-theme",
    preview: "bg-preview-camping text-theme-camping!",
    title: "Camping Fire",
  },
];
