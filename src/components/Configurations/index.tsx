import React, { useState } from "react";

import "./style.css";

export default function Configurations() {
  const [url, setUrl] = useState("");
  return (
    <div id='configurations'>
      <input
        type='text'
        id='url'
        name='url'
        placeholder='background url'
        onChange={(event) => setUrl(event.target.value)}
      />
      <button
        onClick={() => {
          const body = document.querySelector("body");
          if (body) {
            body.style.backgroundImage = `url(${url})`;
          }
        }}
      >
        change
      </button>
    </div>
  );
}
