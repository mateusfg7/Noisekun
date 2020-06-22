import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function Water() {
  const [waterState, setWaterState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source src='sounds/water.mp3' type='audio/mp3' />
      </audio>
      <div
        className='sound-button'
        id='water-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[2];
          const button = document.getElementById("water-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[2];
          changeStateOfAudio(
            audio,
            waterState,
            setWaterState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[2]}
      />
    </div>
  );
}
