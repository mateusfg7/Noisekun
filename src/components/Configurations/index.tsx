import React, { useState, useEffect } from "react";
import BackgroundConfig from "./configs/background";

import "./style.css";

export default function Configurations() {
  const [backgroundUrl, setBackgroundUrl] = useState(
    localStorage.getItem("background_url") ?? ""
  );

  function saveConfigs() {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundImage = `url(${backgroundUrl})`;
      localStorage.setItem("background_url", backgroundUrl);
    }
  }
  function resetConfigs() {
    setBackgroundUrl("");
  }

  useEffect(() => {
    saveConfigs();
  }, []);
  useEffect(() => {
    saveConfigs();
  }, [backgroundUrl]);

  return (
    <>
      <input type='checkbox' id='configButton' />
      <label htmlFor='configButton' id='configLabel'>
        <img src='/Noisekun/icons/config.svg' alt='Configurations' />
      </label>
      <div id='configurations'>
        <BackgroundConfig url={backgroundUrl} setUrl={setBackgroundUrl} />

        <button onClick={() => saveConfigs()}>SAVE</button>
      </div>
    </>
  );
}
