export default function changeStateOfAudio(
  audio: HTMLAudioElement | null,
  stateOfAudio: boolean,
  setStateOfAudio: React.Dispatch<React.SetStateAction<boolean>>,
  button: HTMLElement | null,
  audioCotroller: Element | null
): void {
  if (!stateOfAudio) {
    if (audio) {
      audio.play();
      setStateOfAudio(true);
    }
  } else {
    if (audio) {
      audio.pause();
      setStateOfAudio(false);
    }
  }
  if (button) {
    button.classList.toggle("selected");
  }
  if (audioCotroller) {
    audioCotroller.classList.toggle("selected");
  }
}
