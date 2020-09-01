import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import BackgroundConfig from './configs/background';
import ToogleThemeConfig from './configs/theme';

import { ConfigButton, ConfigLabel, ConfigurationsList } from './styles';

const Configurations: React.FC<IConfigurations> = ({ toggleTheme }) => {
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
      <ConfigButton type="checkbox" id="config-button" />
      <ConfigLabel htmlFor="config-button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </ConfigLabel>
      <ConfigurationsList className="configurations-list">
        <BackgroundConfig url={backgroundUrl} setUrl={setBackgroundUrl} />
        <ToogleThemeConfig toggleTheme={toggleTheme} />

        <button onClick={() => resetConfigs()} type="button">
          reset
        </button>
      </ConfigurationsList>
    </>
  );
};

export default Configurations;
