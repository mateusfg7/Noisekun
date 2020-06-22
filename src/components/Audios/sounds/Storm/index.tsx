import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function Storm() {
  const [stormState, setStormState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source src='/Noisekun/sounds/storm.mp3' type='audio/mp3' />
      </audio>
      <div
        className='sound-button'
        id='storm-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[5];
          const button = document.getElementById("storm-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[5];
          changeStateOfAudio(
            audio,
            stormState,
            setStormState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[5]}
      />
    </div>
  );
}
