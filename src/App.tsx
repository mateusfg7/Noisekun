import React from "react";

import "./styles/effects.css";
import "./styles/global.css";

import Header from "./components/Header";
import Audios from "./components/Audios";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-section'>
        <Audios />
      </div>
    </div>
  );
}

export default App;
