/// <reference types="react-scripts" />

// Audios Component
interface IAudios {
  Sound: React.FC<ISound>;
  VolumeController: React.FC<IVolumeController>;
  changeStateOfAudio: CallableFunction;
}

// Sound Comonent
interface ISound {
  name: string;
  changeStateOfAudio: CallableFunction;
  VolumeController: CallableFunction;
}

// Volume Controller
interface IVolumeController {
  audioObject: HTMLAudioElement | null;
  id: string;
  state: boolean;
}

// Configurations component
interface IConfigurations {
  toggleTheme(): void;
}

// Background Config
interface IBackgroundConfig {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  url: string;
}

// Theme Config
interface IThemeConfig {
  toggleTheme(): void;
}
