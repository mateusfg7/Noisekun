/// <reference types="react-scripts" />

// Environments Variables
interface IEnv {
  HOST: string;
}

// Audios Component
interface IAudios {
  Sound: React.FC<ISound>;
  VolumeController: React.FC<IVolumeController>;
  changeStateOfAudio: Function;
  env: IEnv;
}

// Sound Comonent
interface ISound {
  name: string;
  changeStateOfAudio: Function;
  VolumeController: Function;
  env: IEnv;
}

// Volume Controller
interface IVolumeController {
  audioObject: HTMLAudioElement | null;
  id: string;
}

interface IBackgroundConfig {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  url: string;
}
