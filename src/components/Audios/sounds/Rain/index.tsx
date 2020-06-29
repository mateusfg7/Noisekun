import React, { useState } from "react";

import { HOST } from "../../../../services/defaultVariables";
import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function Rain() {
  const [rainState, setRainState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source src={`${HOST}/rain`} type='audio/mp3' />
      </audio>
      <div
        className='sound-button'
        id='rain-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[4];
          const button = document.getElementById("rain-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[4];
          changeStateOfAudio(
            audio,
            rainState,
            setRainState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[4]}
      />
    </div>
  );
}
