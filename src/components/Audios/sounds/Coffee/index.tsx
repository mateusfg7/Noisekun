import React, { useState } from "react";

import { HOST } from "../../../../services/defaultVariables";
import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function Coffee() {
  const [coffeeState, setCoffeeState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source src={`${HOST}/coffee`} type='audio/mp3' />
      </audio>
      <div
        className='sound-button'
        id='coffee-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[6];
          const button = document.getElementById("coffee-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[6];
          changeStateOfAudio(
            audio,
            coffeeState,
            setCoffeeState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[6]}
      />
    </div>
  );
}
