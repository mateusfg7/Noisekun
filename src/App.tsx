import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import environment from './services/defaultVariables';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Presentation from './modal/Presentation';

import Header from './components/Header';
import Audios from './components/Audios';
import Sound from './components/Sound';
import Configurations from './components/Configurations';
import VolumeController from './components/VolumeController';
import Footer from './components/Footer';

import changeStateOfAudio from './functions/changeStateOfAudio';

function App(): JSX.Element {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [showModal, setShowModal] = usePersistedState('show', true);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const ConditionalPresentation = () => {
    if (showModal) {
      return <Presentation show setShow={setShowModal} />;
    }
    return <Presentation show={false} setShow={setShowModal} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <ConditionalPresentation />

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

export default App;
