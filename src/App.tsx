import React from "react";

import * as environment from "./services/defaultVariables";

import "./styles/effects.css";
import "./styles/global.css";

import Header from "./components/Header";
import Audios from "./components/Audios";
import Sound from "./components/Sound";
import Configurations from "./components/Configurations";
import VolumeController from "./components/VolumeController";

import changeStateOfAudio from "./functions/changeStateOfAudio";

function App() {
  return (
    <div className='App'>
      <Header />
      <Configurations />
      <section className='main-section audio-section'>
        <Audios
          Sound={Sound}
          VolumeController={VolumeController}
          changeStateOfAudio={changeStateOfAudio}
          env={environment}
        />
      </section>
      {/* <section className='main-section'></section> */}
    </div>
  );
}

export default App;
