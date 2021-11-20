<div align="center">

# ![Noisekun :headphones:](.github/docs/favicon.png)

_Listen combinations of ambient sounds for **relaxing** or getting more **productive** on your task!_

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

[![CodeFactor](https://img.shields.io/codefactor/grade/github/Noisekun/Noisekun?style=flat-square)](https://www.codefactor.io/repository/github/mateusfg7/noisekun)

</div>

<br/>
<br/>

---

_Inspired on [Noisli](https://www.noisli.com/)_
