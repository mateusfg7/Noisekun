<div align="center">

# ![Noisekun :headphones:](.github/assets/docs/favicon.png)

_Listen combinations of ambient sounds for **relaxing** or getting more **productive** on your task!_

![](.github/assets/docs/mocks/iphone-man-office-edited.png)

</div>

<br/>

<div align="right">

_Inspired on [Noisli](https://www.noisli.com/)_

</div>

<br/>
<br/>

# Setup Project

### Install dependencies

_yarn_
```
yarn install
```
_npm_
```
npm install
```

### Setup environment variables
Create file `.env.local` on root of the project, and add the following variables

_see `.env.example`_
```
CDN_AUDIO_SERVER=https://cdn.example.com
```
> The cdn needs to have the audio files on the root of the server
> 
> e.g.: _https://cdn.example.com/coffee.mp3_
>
> To change this pattern, modify the file `src/components/Sound/index.tsx`

### Setup Umami analytics

Umami script is configured on [`src/pages/_app.tsx`](src/pages/_app.tsx):
```html
<script
  async
  defer
  data-website-id="cd21c714-5753-4e56-ad9a-8a5dee7bcc9d"
  src="https://mateusfg7-umami-instance.herokuapp.com/umami.js"
/>
```

Edit this code to add your own Umami script, or remove it to disable Umami analytics.

> See [umami.is](https://umami.is/) for more information about how to setup your instance

## Init Dev Environment

### Setup husky

Prepare husky for use git-hooks, to automate commits

_yarn_
```
yarn prepare
```
_npm_
```
npm run prepare
```


### Start dev server

_yarn_
```
yarn dev
```

_npm_
```
npm run Dev
```

## Init production environment

_yarn_
```
yarn build && yarn start
```

_npm_
```
npm run build && npm run start
```





<br/>
<br/>

<div align="center">

![](https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fnoisekun.vercel.app) [![CodeFactor](https://img.shields.io/codefactor/grade/github/mateusfg7/Noisekun?style=flat-square)](https://www.codefactor.io/repository/github/mateusfg7/noisekun) ![](https://img.shields.io/github/last-commit/mateusfg7/noisekun?style=flat-square)

![](.github/assets/docs/mocks/window.png)

</div>

<br/>

---

# Credits

## Icons
[rain](https://freeicons.io/weather-icons/icon-cloud-rain-icon-6709) - [storm](https://freeicons.io/weather-icons/icon-cloud-lightning-icon-6715) - [wind](https://freeicons.io/weather-icons/icon-wind-icon-6748) - [drops](https://freeicons.io/weather-icons/icon-raindrops-icon-6741) - [waves](https://freeicons.io/test/travel-beach-swimming-icon-1279) - [water](https://freeicons.io/hotel-and-spa/sea-icon-786) - [birds-tree](https://freeicons.io/travel-and-holiday/travel-trees-icon-1302) - [leafs](https://freeicons.io/beauty-and-salon/leaf-icon-1202) - [fire](https://freeicons.io/travel-and-holiday/travel-fire-icon-1289) - [night](https://freeicons.io/weather-icons-2/weather-moon-icon-13639#) (edited) - [coffee](https://freeicons.io/cafe-and-coffee-shop-icons/cafe-cup-icon-2984) - [noise-block](https://freeicons.io/computer-devices/headset-headphone-earphone-icon-133586) - [train](https://freeicons.io/travel-and-holiday/travel-tarin-icon-1301) - [air-plane](https://freeicons.io/travel-and-holiday/travel-plane-flight-icon-1296) - [underwater](https://freeicons.io/sports-icons-2/icon-diving-goggles-icon-6578) - [washingmachine](https://freeicons.io/cleaning/cleaning-washing-machine-washingmachine-icon-42075#) (edited) - [waterfall](https://www.svgrepo.com/svg/215029/waterfall) (edited)

## Sounds

Sound | Author | License | Edition
--- | --- | --- | ---
[Airplane](https://www.youtube.com/watch?v=yJrNMM7xvug) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Birds](https://www.youtube.com/watch?v=J6OGbkl4Vrs) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Coffee Shop](https://www.youtube.com/watch?v=2ewwVYoMU5I) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Drops](https://www.youtube.com/watch?v=yLhG21A_9QE) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Fire Wood](https://www.youtube.com/watch?v=aJ21cKAR7-M) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Leaves](https://freesound.org/people/Stek59/sounds/457318/) | [Stek59](https://freesound.org/people/Stek59/) | CC0 | [Mateus Felipe](https://github.com/mateusfg7)
[Night](https://www.youtube.com/watch?v=nd1qc_bhMOs) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Rain](https://www.youtube.com/watch?v=3oMcTXhXOpc) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Stream Water](https://www.youtube.com/watch?v=cN5sGvQ_m_c) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Thunder Storm](https://freesound.org/people/Borys_Kozielski/sounds/316831/) | [Borys Kozielski](https://freesound.org/people/Borys_Kozielski/) | CC0
[Train](https://trains.ambient-mixer.com/rainy-train) | [vahid](https://user.ambient-mixer.com/details/sylvanhomestead) | CC Sampling + |
[Underwater](https://freesound.org/people/Tim_Verberne/sounds/482167/) | [Tim Verberne](https://freesound.org/people/Tim_Verberne/) | CC0
[Washing Machine](https://quicksounds.com/sound/12411/washing-machine-underwater-ambience-2) | [QuickSounds.com](https://quicksounds.com/) | [Standard License](https://quicksounds.com/page/license-agreement) | [Mateus Felipe](https://github.com/mateusfg7)
[Waterfall](https://freesound.org/people/straget/sounds/489073/) | [Straget](https://freesound.org/people/straget/) | CC BY
[Waves](https://www.youtube.com/watch?v=SL9NdTMsIUk) | [SFX Producer](https://www.youtube.com/channel/UCbJpWz8-JnMwVqHZcUE8gaQ) | CC0
[Wind](https://freesound.org/people/felix.blume/sounds/217506/) | [Felix Blume](https://freesound.org/people/felix.blume/) | CC0 | [Mateus Felipe](https://github.com/mateusfg7)

