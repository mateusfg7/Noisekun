import React, { useState } from "react";

import "./style.css";

export default function Configurations() {
  const [url, setUrl] = useState("");

  function changeBodyBackground() {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundImage = `url(${url})`;
    }
  }

  return (
    <div id='configurations'>
      <fieldset>
        <legend>BACKGROUND</legend>
        <input
          type='text'
          id='url'
          name='url'
          placeholder='background url'
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
        <button onClick={() => changeBodyBackground()}>change</button>
      </fieldset>
    </div>
  );
}
