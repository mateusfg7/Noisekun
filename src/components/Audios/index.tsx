import React from "react";

import "./styles.css";

import OceanWaves from "./sounds/OceanWaves";
import SmallWaves from "./sounds/SmallWaves";
import Water from "./sounds/Water";
import ForestAmbience from "./sounds/ForestAmbience";
import Rain from "./sounds/Rain";
import Storm from "./sounds/Storm";
import Coffee from "./sounds/Coffee";
import Wind from "./sounds/Wind";

export default function Audios() {
  return (
    <div className='audios'>
      <OceanWaves />
      <SmallWaves />
      <Water />
      <ForestAmbience />
      <Rain />
      <Storm />
      <Coffee />
      <Wind />
    </div>
  );
}
