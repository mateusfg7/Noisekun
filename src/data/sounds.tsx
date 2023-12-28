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
  Wind
} from '~/components/sound-icons'

export const sounds = [
  {
    id: 'rain',
    title: 'Rain',
    icon: Rain,
    file: {
      url: 'https://cdn.noisekun.com/sounds/rain.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'storm',
    title: 'Storm',
    icon: Storm,
    file: {
      url: 'https://cdn.noisekun.com/sounds/storm.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: Drops,
    file: {
      url: 'https://cdn.noisekun.com/sounds/drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'wind',
    title: 'Wind',
    icon: Wind,
    file: {
      url: 'https://cdn.noisekun.com/sounds/wind.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waves',
    title: 'Waves',
    icon: Waves,
    file: {
      url: 'https://cdn.noisekun.com/sounds/waves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'underwater',
    title: 'Underwater',
    icon: Underwater,
    file: {
      url: 'https://cdn.noisekun.com/sounds/underwater.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'stream-water',
    title: 'Stream Water',
    icon: StreamWater,
    file: {
      url: 'https://cdn.noisekun.com/sounds/stream-water.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waterfall',
    title: 'Waterfall',
    icon: Waterfall,
    file: {
      url: 'https://cdn.noisekun.com/sounds/waterfall.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'birds-tree',
    title: 'Birds on Tree',
    icon: BirdsTree,
    file: {
      url: 'https://cdn.noisekun.com/sounds/birds-tree.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'leaves',
    title: 'Leaves',
    icon: Leaves,
    file: {
      url: 'https://cdn.noisekun.com/sounds/leaves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'fire',
    title: 'Bonfire',
    icon: Fire,
    file: {
      url: 'https://cdn.noisekun.com/sounds/fire.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'cave',
    title: 'Cave Sounds',
    icon: Cave,
    file: {
      url: 'https://cdn.noisekun.com/sounds/cave-drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'night',
    title: 'Night',
    icon: Night,
    file: {
      url: 'https://cdn.noisekun.com/sounds/night.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'coffee',
    title: 'Coffee shop',
    icon: Coffee,
    file: {
      url: 'https://cdn.noisekun.com/sounds/coffee.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'train',
    title: 'Train',
    icon: Train,
    file: {
      url: 'https://cdn.noisekun.com/sounds/train.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'air-plane',
    title: 'Airplane',
    icon: AirPlane,
    file: {
      url: 'https://cdn.noisekun.com/sounds/air-plane.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'washing-machine',
    title: 'Washing machine',
    icon: WashingMachine,
    file: {
      url: 'https://cdn.noisekun.com/sounds/washing-machine.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'playground',
    title: 'Playground',
    icon: Playground,
    file: {
      url: 'https://cdn.noisekun.com/sounds/playground.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'boat',
    title: 'Boat',
    icon: Boat,
    file: {
      url: 'https://cdn.noisekun.com/sounds/boat.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'rain-on-tent',
    title: 'Rain on Tent',
    icon: RainOnTent,
    file: {
      url: 'https://cdn.noisekun.com/sounds/rain-on-tent.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'brown-noise',
    title: 'Brown Noise',
    icon: BrownNoise,
    file: {
      url: 'https://cdn.noisekun.com/sounds/brown-noise.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'white-noise',
    title: 'White Noise',
    icon: WhiteNoise,
    file: {
      url: 'https://cdn.noisekun.com/sounds/white-noise.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'pink-noise',
    title: 'Pink Noise',
    icon: PinkNoise,
    file: {
      url: 'https://cdn.noisekun.com/sounds/pink-noise.ogg',
      type: 'audio/ogg'
    }
  }
]

export type Sound = (typeof sounds)[0]
