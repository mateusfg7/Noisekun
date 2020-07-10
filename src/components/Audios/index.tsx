import React from "react";

import "./styles.css";

export default function Audios({
  Sound,
  VolumeController,
  changeStateOfAudio,
  env,
}: IAudios) {
  return (
    <div className='audios'>
      <Sound
        name='rain'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name='storm'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name='wind'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name='water'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name='ocean_waves'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name='small_waves'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name='forest_ambience'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
      <Sound
        name='coffee'
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
        env={env}
      />
    </div>
  );
}
