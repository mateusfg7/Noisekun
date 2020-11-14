import { createGlobalStyle } from 'styled-components';
import backgroundChange from './effects';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap');

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



  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: white;

    background: fixed no-repeat center;
    background-size: cover;
    animation: ${backgroundChange} 300s 0s infinite;

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
`;
