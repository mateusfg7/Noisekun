import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function OcenaWaves() {
  const [smallWavesState, setSmallWavesState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source
          src='https://noisekun-server.herokuapp.com/small_waves'
          type='audio/mp3'
        />
      </audio>
      <div
        className='sound-button'
        id='small-waves-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[1];
          const button = document.getElementById("small-waves-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[1];
          changeStateOfAudio(
            audio,
            smallWavesState,
            setSmallWavesState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[1]}
      />
    </div>
  );
}
