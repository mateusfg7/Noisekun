export default function changeStateOfAudio(
  audio: HTMLAudioElement,
  stateOfAudio: boolean,
  setStateOfAudio: React.Dispatch<React.SetStateAction<boolean>>,
  button: HTMLElement | null
): void {
  if (!stateOfAudio) {
    audio.play();
    setStateOfAudio(true);
  } else {
    audio.pause();
    setStateOfAudio(false);
  }
  if (button) {
    button.classList.toggle("selected");
  }
}
