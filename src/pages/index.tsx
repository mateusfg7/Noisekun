import React from 'react'

import environment from '../services/defaultVariables'

import GlobalStyle from '../styles/global'

import Header from '../components/Header'
import Audios from '../components/Audios'
import Sound from '../components/Sound'
import VolumeController from '../components/VolumeController'
import Footer from '../components/Footer'

import changeStateOfAudio from '../functions/changeStateOfAudio'

function Home (): JSX.Element {
  return (
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
        <Footer />
      </div>
  )
}

export default Home
