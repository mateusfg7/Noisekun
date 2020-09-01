/// <reference types="react-scripts" />

// Environments Variables
interface IEnv {
  HOST: string;
}

// Audios Component
interface IAudios {
  Sound: React.FC<ISound>;
  VolumeController: React.FC<IVolumeController>;
  changeStateOfAudio: CallableFunction;
  env: IEnv;
}

// Sound Comonent
interface ISound {
  name: string;
  changeStateOfAudio: CallableFunction;
  VolumeController: CallableFunction;
  env: IEnv;
}

// Volume Controller
interface IVolumeController {
  audioObject: HTMLAudioElement | null;
  id: string;
}

// Background Config
interface IBackgroundConfig {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  url: string;
}

// Theme Config
interface IToogleThemeConfig {
  toogleTheme: (newTheme: DefaultTheme) => void;
  themeList: {
    default: DefaultTheme;
    dark: DefaultTheme;
  };
}
