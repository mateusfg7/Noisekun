import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

export default function OcenaWaves() {
  const [smallWavesState, setSmallWavesState] = useState(false);

  return (
    <div>
      <audio loop>
        <source src='sounds/small_waves.mp3' type='audio/mp3' />
      </audio>
      <button
        className='sound-button'
        id='small-waves-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[1];
          const button = document.getElementById("small-waves-button");
          changeStateOfAudio(
            audio,
            smallWavesState,
            setSmallWavesState,
            button
          );
        }}
      >
        Small Waves
      </button>
    </div>
  );
}
