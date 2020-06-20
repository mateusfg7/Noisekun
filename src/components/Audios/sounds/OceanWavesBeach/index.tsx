import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

export default function OcenaWavesBeach() {
  const [oceanWavesBeachState, setOceanWavesBeachState] = useState(false);

  return (
    <div>
      <audio id='sound' loop>
        <source src='sounds/ocean_waves_beach.mp3' type='audio/mp3' />
      </audio>
      <button
        className='audio-button'
        id='ocean-waves-beach-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[0];
          const button = document.getElementById("ocean-waves-beach-button");
          changeStateOfAudio(
            audio,
            oceanWavesBeachState,
            setOceanWavesBeachState,
            button
          );
        }}
      >
        Ocean Waves Beach
      </button>
    </div>
  );
}
