import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import BackgroundConfig from './configs/background';

import './style.css';
import './mobile-style.css';

export default function Configurations(): JSX.Element {
  const [backgroundUrl, setBackgroundUrl] = useState(
    localStorage.getItem('background_url') ?? ''
  );

  function saveConfigs() {
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundImage = `url(${backgroundUrl})`;
      localStorage.setItem('background_url', backgroundUrl);
    }
  }
  function resetConfigs() {
    setBackgroundUrl('');
  }

  useEffect(() => {
    saveConfigs();
  }, []);
  useEffect(() => {
    saveConfigs();
  }, [backgroundUrl]);

  return (
    <>
      <input type="checkbox" id="configButton" />
      <label htmlFor="configButton" id="configLabel">
        <FontAwesomeIcon icon={faChevronLeft} />
      </label>
      <div id="configurations">
        <BackgroundConfig url={backgroundUrl} setUrl={setBackgroundUrl} />

        <button onClick={() => resetConfigs()} type="button">
          reset
        </button>
      </div>
    </>
  );
}
