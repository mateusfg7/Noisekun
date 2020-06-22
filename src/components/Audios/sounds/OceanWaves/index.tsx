import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

export default function OcenaWaves() {
  const [oceanWavesState, setOceanWavesState] = useState(false);

  return (
    <div>
      <audio loop>
        <source src='sounds/ocean_waves.mp3' type='audio/mp3' />
      </audio>
      <button
        className='sound-button'
        id='ocean-waves-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[0];
          const button = document.getElementById("ocean-waves-button");
          changeStateOfAudio(
            audio,
            oceanWavesState,
            setOceanWavesState,
            button
          );
        }}
      >
        Ocean Waves
      </button>
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[0]}
      />
    </div>
  );
}
