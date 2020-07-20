import React, { useState, useEffect } from "react";

import "./style.css";

export default function Configurations() {
  const [url, setUrl] = useState(localStorage.getItem("background_url") ?? "");

  function saveConfigs() {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundImage = `url(${url})`;
      localStorage.setItem("background_url", url);
    }
  }

  useEffect(() => {
    saveConfigs();
  }, []);

  return (
    <div id='configurations'>
      <h4>Background</h4>
      <div className='fieldset'>
        <span className='fieldset-title'>url</span>
        <input
          type='text'
          id='url'
          name='url'
          placeholder='png, jpeg, gif...'
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
      </div>
      <button onClick={() => saveConfigs()}>SAVE</button>
    </div>
  );
}
