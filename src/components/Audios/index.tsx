import React from "react";

import "./styles.css";

import OceanWaves from "./sounds/OceanWaves";
import SmallWaves from "./sounds/SmallWaves";

export default function Audios() {
  return (
    <div className='audios'>
      <OceanWaves />
      <SmallWaves />
    </div>
  );
}
