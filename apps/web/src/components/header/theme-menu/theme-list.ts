import type { Theme } from "~/stores/theme-store";

type ThemeAttrs = {
  title: string;
  id: Theme;
};

export const themeList: ThemeAttrs[] = [
  {
    id: "light-theme",
    title: "Light",
  },
  {
    id: "dark-theme",
    title: "Dark",
  },
  {
    id: "transition-theme",
    title: "Transition",
  },
  {
    id: "room-theme",
    title: "Room",
  },
  {
    id: "train-theme",
    title: "Train",
  },
  {
    id: "waterfall-theme",
    title: "Waterfall",
  },
  {
    id: "camping-theme",
    title: "Camping Fire",
  },
];
