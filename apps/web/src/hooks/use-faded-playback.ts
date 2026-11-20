import { useEffect, useRef } from "react";
import type { RefObject } from "react";

import { AudioFader } from "~/lib/audio-fader";

const FADE_IN_MS = 1000;
const FADE_OUT_MS = 300;
const MUTE_FADE_MS = 500;

type Playback = {
  /** Whether the sound should be audible: active and allowed to autoplay. */
  shouldPlay: boolean;
  /** Volume to play at, already scaled by the global volume. */
  volume: number;
  /** Silenced without stopping, e.g. while the pomodoro is paused. */
  muted: boolean;
};

/**
 * Drives an audio element from the sound's state: it fades in when the sound
 * starts, fades out and pauses when it stops, and fades on mute changes.
 * Volume changes from the sliders apply right away.
 */
export function useFadedPlayback(
  audioRef: RefObject<HTMLAudioElement | null>,
  { shouldPlay, volume, muted }: Playback
) {
  const faderRef = useRef<AudioFader | null>(null);
  const previousRef = useRef({ muted, shouldPlay });

  const target = muted ? 0 : volume;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    faderRef.current ??= new AudioFader(audio);
    const fader = faderRef.current;

    const previous = previousRef.current;
    previousRef.current = { muted, shouldPlay };

    if (shouldPlay !== previous.shouldPlay) {
      if (shouldPlay) {
        // A sound toggled back on mid fade-out ramps up from where it is.
        if (audio.paused) {
          fader.setVolume(0);
        }

        // Autoplay can still be refused; the sound then stays silent.
        audio.play().catch(() => null);
        fader.fadeTo(target, FADE_IN_MS);
      } else {
        fader.fadeTo(0, FADE_OUT_MS, () => audio.pause());
      }

      return;
    }

    if (!shouldPlay) {
      return;
    }

    if (muted !== previous.muted) {
      fader.fadeTo(target, MUTE_FADE_MS);
    } else if (fader.isFading) {
      fader.retarget(target);
    } else {
      fader.setVolume(target);
    }
  }, [audioRef, muted, shouldPlay, target]);

  useEffect(() => () => faderRef.current?.cancel(), []);
}
