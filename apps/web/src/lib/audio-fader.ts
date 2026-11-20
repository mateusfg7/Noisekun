// Smoothstep: eases in and out so fades start and land without an audible step.
function ease(progress: number) {
  return progress * progress * (3 - 2 * progress);
}

function clampVolume(volume: number) {
  return Math.min(1, Math.max(0, volume));
}

type Fade = {
  frame: number;
  to: number;
};

/**
 * Ramps an audio element's volume over time. Only one fade runs at a time:
 * starting a new fade, or setting the volume directly, cancels the running one.
 */
export class AudioFader {
  private readonly audio: HTMLAudioElement;
  private fade: Fade | null = null;

  constructor(audio: HTMLAudioElement) {
    this.audio = audio;
  }

  get isFading() {
    return this.fade !== null;
  }

  /** `onComplete` runs only when the fade finishes, never when it's cancelled. */
  fadeTo(to: number, durationMs: number, onComplete?: () => void) {
    this.cancel();

    const from = this.audio.volume;
    const start = performance.now();

    const step = (now: number) => {
      const { fade } = this;

      if (!fade) {
        return;
      }

      const progress = Math.min((now - start) / durationMs, 1);
      this.audio.volume = clampVolume(from + (fade.to - from) * ease(progress));

      if (progress < 1) {
        fade.frame = requestAnimationFrame(step);

        return;
      }

      this.fade = null;
      onComplete?.();
    };

    this.fade = { frame: requestAnimationFrame(step), to };
  }

  /** Moves the end point of the running fade, so it lands on a new volume. */
  retarget(to: number) {
    if (this.fade) {
      this.fade.to = to;
    }
  }

  setVolume(volume: number) {
    this.cancel();
    this.audio.volume = clampVolume(volume);
  }

  cancel() {
    if (!this.fade) {
      return;
    }

    cancelAnimationFrame(this.fade.frame);
    this.fade = null;
  }
}
