<div align="center">

# ![Noisekun :headphones:](.github/assets/icon.png)

_Listen combinations of ambient sounds for **relaxing** or getting more **productive** on your task!_

<img src=".github/assets/screenshots.png">

</div>

<br/>

<br/>
<br/>
<br/>

<div align="center">

![](https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fnoisekun.vercel.app)![](https://img.shields.io/github/last-commit/mateusfg7/noisekun?style=flat-square)

![](.github/assets/pagespeed-metrics.svg)

</div>

<br/>
<br/>

# ✨ Features

- 20 Ambience sounds
- Control volume for each sound individually
- Control global sound
- Enhance look with 7 themes
- Pomodoro timer
- Browser persistent config (pomodoro time, volume and theme)

Check the [**issue list**](https://github.com/mateusfg7/Noisekun/issues?q=is%3Aissue+is%3Aopen+label%3Afeat) for more planned features!

# 🔧 Setup Project

## Audio files

The audio URLs is hard coded on [`sounds.tsx`](src/sounds.tsx), update file with your URLs.
The audio files are stored on Google Cloud Storage, but you can access them at `.github/assets/sounds`.
The icons is on [`src/components/sound-icons/`](src/components/sound-icons/).


## Init server
> _This project is using [pnpm](https://pnpm.io) as package manager._

**Install dependencies**
```
pnpm install
```

**Init development server**
```
pnpm dev
```
_or..._

**Init production server**

```
pnpm build && pnpm start
```

<br/>
<br/>
<br/>
<br/>

# ©️ Credits

## Icons
[rain](https://freeicons.io/weather-4/weather-forecast-rain-wind-strong-cloud-icon-44765) - [storm](https://freeicons.io/weather-4/weather-forecast-storn-lightning-bolt-cloud-storm-icon-44770) - [wind](https://freeicons.io/weather-4/weather-forecast-blow-wind-windy-icon-44746) - [drops](https://freeicons.io/weather-icons/icon-raindrops-icon-6741) - [waves](https://freeicons.io/test/travel-beach-swimming-icon-1279) - [birds-tree](https://freeicons.io/travel-and-holiday/travel-trees-icon-1302) - [leafs](https://freeicons.io/beauty-and-salon/leaf-icon-1202) - [fire](https://freeicons.io/travel-and-holiday/travel-fire-icon-1289) - [cave](https://www.flaticon.com/free-icon/cave_2206606) - [night](https://freeicons.io/weather-4/weather-moon-night-stars-icon-44777) - [coffee](https://freeicons.io/restaurant/restaurant-breakfast-hot-drink-coffee-icon-43370) - [noise-block](https://freeicons.io/computer-devices/headset-headphone-earphone-icon-133586) - [train](https://freeicons.io/vehicles-and-transport-2/vehicles-and-transport-train-sign-rail-tram-travel-icon-44648) - [air-plane](https://freeicons.io/travel-and-holiday/travel-plane-flight-icon-1296) - [underwater](https://freeicons.io/sports-icons-2/icon-diving-goggles-icon-6578) - [washingmachine](https://freeicons.io/cleaning/cleaning-washing-machine-washingmachine-icon-42075#) - [waterfall](https://www.svgrepo.com/svg/215029/waterfall) - [playground](https://freeicons.io/water-park-icon-set-35898/slider-playground-fair-water-park-winter-amusement-icon-1439949) - [noise](https://freeicons.io/music-2/music-sound-waveform-wave-icon-43351)

## Sounds

Sound                                                                     | Author                                                   | License | Edition
--------------------------------------------------------------------------|----------------------------------------------------------|---------|----------------------------------------------
[Pomodoro Alarm](https://freesound.org/people/ZyryTSounds/sounds/219244/) | [ZyryTSounds](https://freesound.org/people/ZyryTSounds/) | CC0     | [Mateus Felipe](https://github.com/mateusfg7)
[Airplane](https://www.youtube.com/watch?v=yJrNMM7xvug) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Birds](https://www.youtube.com/watch?v=J6OGbkl4Vrs) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Coffee Shop](https://www.youtube.com/watch?v=2ewwVYoMU5I) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Drops](https://www.youtube.com/watch?v=yLhG21A_9QE) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Fire Wood](https://www.youtube.com/watch?v=aJ21cKAR7-M) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Cave Drops](https://www.youtube.com/watch?v=23INRDlV-1g) | [SFX Producer](https://www.youtube.com/@sfxworld) | CC0 | [Devan McGeer](https://github.com/McGeerDev)
[Leaves](https://freesound.org/people/Stek59/sounds/457318/) | [Stek59](https://freesound.org/people/Stek59/) | CC0 | [Mateus Felipe](https://github.com/mateusfg7)
[Night](https://www.youtube.com/watch?v=nd1qc_bhMOs) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Rain](https://www.youtube.com/watch?v=3oMcTXhXOpc) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Stream Water](https://www.youtube.com/watch?v=cN5sGvQ_m_c) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Thunder Storm](https://freesound.org/people/Borys_Kozielski/sounds/316831/) | [Borys Kozielski](https://freesound.org/people/Borys_Kozielski/) | CC0
[Train](https://trains.ambient-mixer.com/rainy-train) | [vahid](https://user.ambient-mixer.com/details/sylvanhomestead) | CC Sampling + |
[Underwater](https://freesound.org/people/Tim_Verberne/sounds/482167/) | [Tim Verberne](https://freesound.org/people/Tim_Verberne/) | CC0
[Washing Machine](https://quicksounds.com/sound/12411/washing-machine-underwater-ambience-2) | [QuickSounds.com](https://quicksounds.com/) | [Standard License](https://quicksounds.com/page/license-agreement) | [Mateus Felipe](https://github.com/mateusfg7)
[Waterfall](https://freesound.org/people/straget/sounds/489073/) | [Straget](https://freesound.org/people/straget/) | CC BY | [Mateus Felipe](https://github.com/mateusfg7)
[Waves](https://www.youtube.com/watch?v=SL9NdTMsIUk) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Wind](https://freesound.org/people/felix.blume/sounds/217506/) | [Felix Blume](https://freesound.org/people/felix.blume/) | CC0 | [Mateus Felipe](https://github.com/mateusfg7)
[Brown Noise](https://freesound.org/people/georgedyer/sounds/171552/) | [George Dyer](https://freesound.org/people/georgedyer/) | CC0 | [Mateus Felipe](https://github.com/mateusfg7)
[White noise](https://commons.wikimedia.org/w/index.php?title=File%3AWhite-noise-sound-20sec-mono-44100Hz.ogg) | [Jorge Stolfi](https://commons.wikimedia.org/wiki/User:Jorge_Stolfi) | CC BY-SA
[Pink Noise](https://es.wikipedia.org/wiki/Archivo:Pink_noise.ogg) | [Omegatron](https://commons.wikimedia.org/wiki/User:Omegatron) | CC BY-SA
[Playground](https://www.youtube.com/watch?v=YxGv6o1g-LM) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0

# Alternatives

Didn't like Noisekun? Check some alternatives!

- [**Noisli**](https://www.noisli.com/) (Web|Iphone|Android|Chrome) *_the inspiration for this project_
- [**A Soft Murmur**](https://asoftmurmur.com/) (Web)
- [**Blanket**](https://github.com/rafaelmardojai/blanket) (Linux)
- [**Elpy**](https://vanejung.com/elpy/) (Mac|Windows)
- [**Noiseless**](https://helton.github.io/noiseless/) (Web)
- [**Relax**](http://brunobord.github.io/relax/) (Web)
- [**Noice**](https://trynoice.com/) (Android|Web*)
- [**Deepfocus**](https://deepfocus.io/) (Web)
- [**Monkemode**](https://monkmode.xyz/) (Web)

> _Know a cool alternative? Make a Pull Request and [increase the list](https://github.com/mateusfg7/Noisekun/edit/main/README.md)!_

