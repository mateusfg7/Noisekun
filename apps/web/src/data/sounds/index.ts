import { AirPlaneIcon } from "./icons/air-plane";
import { BirdsTreeIcon } from "./icons/birds-tree";
import { BoatIcon } from "./icons/boat";
import { BrownNoiseIcon } from "./icons/brown-noise";
import { CaveIcon } from "./icons/cave";
import { CoffeeIcon } from "./icons/coffee";
import { DropsIcon } from "./icons/drops";
import { FireIcon } from "./icons/fire";
import { LeavesIcon } from "./icons/leaves";
import { NightIcon } from "./icons/night";
import { PinkNoiseIcon } from "./icons/pink-noise";
import { PlaygroundIcon } from "./icons/playground";
import { RainIcon } from "./icons/rain";
import { RainOnTentIcon } from "./icons/rain-on-tent";
import { StormIcon } from "./icons/storm";
import { StreamWaterIcon } from "./icons/stream-water";
import { TrainIcon } from "./icons/train";
import { UnderwaterIcon } from "./icons/underwater";
import { WashingMachineIcon } from "./icons/washing-machine";
import { WaterfallIcon } from "./icons/waterfall";
import { WavesIcon } from "./icons/waves";
import { WhiteNoiseIcon } from "./icons/white-noise";
import { WindIcon } from "./icons/wind";

export const sounds = [
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/rain.ogg",
    },
    icon: RainIcon,
    id: "rain",
    title: "Rain",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/storm.ogg",
    },
    icon: StormIcon,
    id: "storm",
    title: "Storm",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/drops.ogg",
    },
    icon: DropsIcon,
    id: "drops",
    title: "Drops",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/wind.ogg",
    },
    icon: WindIcon,
    id: "wind",
    title: "Wind",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/waves.ogg",
    },
    icon: WavesIcon,
    id: "waves",
    title: "Waves",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/underwater.ogg",
    },
    icon: UnderwaterIcon,
    id: "underwater",
    title: "Underwater",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/stream-water.ogg",
    },
    icon: StreamWaterIcon,
    id: "stream-water",
    title: "Stream Water",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/waterfall.ogg",
    },
    icon: WaterfallIcon,
    id: "waterfall",
    title: "Waterfall",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/birds-tree.ogg",
    },
    icon: BirdsTreeIcon,
    id: "birds-tree",
    title: "Birds on Tree",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/leaves.ogg",
    },
    icon: LeavesIcon,
    id: "leaves",
    title: "Leaves",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/fire.ogg",
    },
    icon: FireIcon,
    id: "fire",
    title: "Bonfire",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/cave-drops.ogg",
    },
    icon: CaveIcon,
    id: "cave",
    title: "Cave Sounds",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/night.ogg",
    },
    icon: NightIcon,
    id: "night",
    title: "Night",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/coffee.ogg",
    },
    icon: CoffeeIcon,
    id: "coffee",
    title: "Coffee shop",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/train.ogg",
    },
    icon: TrainIcon,
    id: "train",
    title: "Train",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/air-plane.ogg",
    },
    icon: AirPlaneIcon,
    id: "air-plane",
    title: "Airplane",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/washing-machine.ogg",
    },
    icon: WashingMachineIcon,
    id: "washing-machine",
    title: "Washing machine",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/playground.ogg",
    },
    icon: PlaygroundIcon,
    id: "playground",
    title: "Playground",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/boat.ogg",
    },
    icon: BoatIcon,
    id: "boat",
    title: "Boat",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/rain-on-tent.ogg",
    },
    icon: RainOnTentIcon,
    id: "rain-on-tent",
    title: "Rain on Tent",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/brown-noise.ogg",
    },
    icon: BrownNoiseIcon,
    id: "brown-noise",
    title: "Brown Noise",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/white-noise.ogg",
    },
    icon: WhiteNoiseIcon,
    id: "white-noise",
    title: "White Noise",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/pink-noise.ogg",
    },
    icon: PinkNoiseIcon,
    id: "pink-noise",
    title: "Pink Noise",
  },
];

export type Sound = (typeof sounds)[number];
