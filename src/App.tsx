import React from "react";

import * as environment from "./services/defaultVariables";

import "./styles/effects.css";
import "./styles/global.css";

import Header from "./components/Header";
import Audios from "./components/Audios";
import Sound from "./components/Sound";
import VolumeController from "./components/VolumeController";

import changeStateOfAudio from "./functions/changeStateOfAudio";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-section'>
        <Audios
          Sound={Sound}
          VolumeController={VolumeController}
          changeStateOfAudio={changeStateOfAudio}
          env={environment}
        />
      </div>
    </div>
  );
}

export default App;
