import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function ForestAmbience() {
  const [forestAmbienceState, setForestAmbienceState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source src='sounds/forest_ambience.mp3' type='audio/mp3' />
      </audio>
      <div
        className='sound-button'
        id='forest-ambience-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[3];
          const button = document.getElementById("forest-ambience-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[3];
          changeStateOfAudio(
            audio,
            forestAmbienceState,
            setForestAmbienceState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[3]}
      />
    </div>
  );
}
