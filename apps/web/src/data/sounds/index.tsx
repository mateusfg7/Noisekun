import {
  AirPlane,
  BirdsTree,
  Boat,
  BrownNoise,
  Cave,
  Coffee,
  Drops,
  Fire,
  Leaves,
  Night,
  PinkNoise,
  Playground,
  Rain,
  RainOnTent,
  Storm,
  StreamWater,
  Train,
  Underwater,
  WashingMachine,
  Waterfall,
  Waves,
  WhiteNoise,
  Wind,
} from "./icons";

export const sounds = [
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/rain.ogg",
    },
    icon: Rain,
    id: "rain",
    title: "Rain",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/storm.ogg",
    },
    icon: Storm,
    id: "storm",
    title: "Storm",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/drops.ogg",
    },
    icon: Drops,
    id: "drops",
    title: "Drops",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/wind.ogg",
    },
    icon: Wind,
    id: "wind",
    title: "Wind",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/waves.ogg",
    },
    icon: Waves,
    id: "waves",
    title: "Waves",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/underwater.ogg",
    },
    icon: Underwater,
    id: "underwater",
    title: "Underwater",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/stream-water.ogg",
    },
    icon: StreamWater,
    id: "stream-water",
    title: "Stream Water",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/waterfall.ogg",
    },
    icon: Waterfall,
    id: "waterfall",
    title: "Waterfall",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/birds-tree.ogg",
    },
    icon: BirdsTree,
    id: "birds-tree",
    title: "Birds on Tree",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/leaves.ogg",
    },
    icon: Leaves,
    id: "leaves",
    title: "Leaves",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/fire.ogg",
    },
    icon: Fire,
    id: "fire",
    title: "Bonfire",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/cave-drops.ogg",
    },
    icon: Cave,
    id: "cave",
    title: "Cave Sounds",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/night.ogg",
    },
    icon: Night,
    id: "night",
    title: "Night",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/coffee.ogg",
    },
    icon: Coffee,
    id: "coffee",
    title: "Coffee shop",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/train.ogg",
    },
    icon: Train,
    id: "train",
    title: "Train",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/air-plane.ogg",
    },
    icon: AirPlane,
    id: "air-plane",
    title: "Airplane",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/washing-machine.ogg",
    },
    icon: WashingMachine,
    id: "washing-machine",
    title: "Washing machine",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/playground.ogg",
    },
    icon: Playground,
    id: "playground",
    title: "Playground",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/boat.ogg",
    },
    icon: Boat,
    id: "boat",
    title: "Boat",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/rain-on-tent.ogg",
    },
    icon: RainOnTent,
    id: "rain-on-tent",
    title: "Rain on Tent",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/brown-noise.ogg",
    },
    icon: BrownNoise,
    id: "brown-noise",
    title: "Brown Noise",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/white-noise.ogg",
    },
    icon: WhiteNoise,
    id: "white-noise",
    title: "White Noise",
  },
  {
    file: {
      type: "audio/ogg",
      url: "https://cdn.noisekun.com/sounds/pink-noise.ogg",
    },
    icon: PinkNoise,
    id: "pink-noise",
    title: "Pink Noise",
  },
];

export type Sound = (typeof sounds)[0];
