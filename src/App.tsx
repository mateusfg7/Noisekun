import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import environment from './services/defaultVariables';

import GlobalStyle from './styles/global';

import default_theme from './styles/themes/default';
import dark_theme from './styles/themes/dark';

import Header from './components/Header';
import Audios from './components/Audios';
import Sound from './components/Sound';
import Configurations from './components/Configurations';
import VolumeController from './components/VolumeController';
import Footer from './components/Footer';

import changeStateOfAudio from './functions/changeStateOfAudio';

function App(): JSX.Element {
  const [theme, setTheme] = usePersistedState('theme', default_theme);

  const toggleTheme = (newTheme: DefaultTheme) => {
    setTheme(newTheme);
  };
  const themes = {
    default: default_theme,
    dark: dark_theme,
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
        <Configurations />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
