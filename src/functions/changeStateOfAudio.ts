export default function changeStateOfAudio(
  audio: HTMLAudioElement | null,
  stateOfAudio: boolean,
  setStateOfAudio: React.Dispatch<React.SetStateAction<boolean>>
): void {
  if (!stateOfAudio) {
    if (audio) {
      audio.play();
      setStateOfAudio(true);
    }
  } else if (audio) {
    audio.pause();
    setStateOfAudio(false);
  }
}
