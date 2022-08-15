import { createGlobalStyle } from 'styled-components'
import backgroundChange from './effects'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    outline: none;
  }

  *:focus,
  *:active {
    outline: none;
  }

  *::-moz-focus-outer {
    border: 0;
  }

  ::-webkit-scrollbar {
    background: none;
    width: 7px;
  }
  ::-webkit-scrollbar:hover {
    width: 15px;
    cursor: grab;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(255, 255, 255, 0.5);
  }



  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: white;

    background: fixed no-repeat center;
    background-size: cover;
    background-color: #0485B4;
    animation: ${backgroundChange} calc(5*60s) 20s infinite;

    input:focus {
      outline: none;
    }

    section.main-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    section.audio-section {
      min-height: 85vh;
      height: 100%;
    }

    button {
      background: none;
      border: none;
    }

    button:hover {
      cursor: pointer;
    }
  }
`
