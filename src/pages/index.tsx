import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import environment from '../services/defaultVariables';

import GlobalStyle from '../styles/global';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import Header from '../components/Header';
import Audios from '../components/Audios';
import Sound from '../components/Sound';
import Configurations from '../components/Configurations';
import VolumeController from '../components/VolumeController';
import Footer from '../components/Footer';

import changeStateOfAudio from '../functions/changeStateOfAudio';

function Home(): JSX.Element {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />

        <Header />
        <section className="main-section audio-section">
          <Audios
            Sound={Sound}
            VolumeController={VolumeController}
            changeStateOfAudio={changeStateOfAudio}
            env={environment}
          />
        </section>
        <Configurations toggleTheme={toggleTheme} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Home;