import {
  AirPlane,
  BirdsTree,
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
  Storm,
  StreamWater,
  Train,
  Underwater,
  WashingMachine,
  Waterfall,
  Waves,
  WhiteNoise,
  Wind
} from '@/components/sound-icons'

export const sounds = [
  {
    id: 'rain',
    title: 'Rain',
    icon: Rain,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/rain.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'storm',
    title: 'Storm',
    icon: Storm,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/storm.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: Drops,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'wind',
    title: 'Wind',
    icon: Wind,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/wind.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waves',
    title: 'Waves',
    icon: Waves,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/waves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'underwater',
    title: 'Underwater',
    icon: Underwater,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/underwater.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'stream-water',
    title: 'Stream Water',
    icon: StreamWater,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/stream-water.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waterfall',
    title: 'Waterfall',
    icon: Waterfall,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/waterfall.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'birds-tree',
    title: 'Birds on Tree',
    icon: BirdsTree,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/birds-tree.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'leaves',
    title: 'Leaves',
    icon: Leaves,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/leaves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'fire',
    title: 'Bonfire',
    icon: Fire,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/fire.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'cave',
    title: 'Cave Sounds',
    icon: Cave,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/cave-drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'night',
    title: 'Night',
    icon: Night,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/night.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'coffee',
    title: 'Coffee shop',
    icon: Coffee,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/coffee.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'train',
    title: 'Train',
    icon: Train,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/train.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'air-plane',
    title: 'Airplane',
    icon: AirPlane,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/air-plane.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'washing-machine',
    title: 'Washing machine',
    icon: WashingMachine,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/washing-machine.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'playground',
    title: 'Playground',
    icon: Playground,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/playground.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'brown-noise',
    title: 'Brown Noise',
    icon: BrownNoise,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/brown-noise.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'white-noise',
    title: 'White Noise',
    icon: WhiteNoise,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/white-noise.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'pink-noise',
    title: 'Pink Noise',
    icon: PinkNoise,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/pink-noise.ogg',
      type: 'audio/ogg'
    }
  }
]

export type Sound = (typeof sounds)[0]
