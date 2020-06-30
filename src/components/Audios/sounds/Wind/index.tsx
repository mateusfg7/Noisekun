import React, { useState } from "react";

import { HOST } from "../../../../services/defaultVariables";
import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function Wind() {
  const [windState, setWindState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source src={`${HOST}/wind`} type='audio/mp3' />
      </audio>
      <div
        className='sound-button'
        id='wind-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[7];
          const button = document.getElementById("wind-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[7];
          changeStateOfAudio(
            audio,
            windState,
            setWindState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[7]}
      />
    </div>
  );
}
