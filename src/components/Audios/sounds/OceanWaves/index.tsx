import React, { useState } from "react";

import changeStateOfAudio from "../../../../functions/changeStateOfAudio";

import VolumeController from "../../../../Controllers/VolumeController";

import "./style.css";

export default function OcenaWaves() {
  const [oceanWavesState, setOceanWavesState] = useState(false);

  return (
    <div className='sound-component'>
      <audio loop>
        <source
          src='https://noisekun-server.herokuapp.com/ocean_waves'
          type='audio/mp3'
        />
      </audio>
      <div
        className='sound-button'
        id='ocean-waves-button'
        onClick={() => {
          const audio = document.getElementsByTagName("audio")[0];
          const button = document.getElementById("ocean-waves-button");
          const audioController = document.getElementsByClassName(
            "audio-controller"
          )[0];
          changeStateOfAudio(
            audio,
            oceanWavesState,
            setOceanWavesState,
            button,
            audioController
          );
        }}
      />
      <VolumeController
        audioObject={document.getElementsByTagName("audio")[0]}
      />
    </div>
  );
}
