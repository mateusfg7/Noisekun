import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Listen combinations of ambient sounds for relaxing or getting more productive on your task!"
        />
        <meta
          name="keywords"
          content="noise, sound, ambience, relaxing, productive, noisli, noisekun"
        />
        <meta name="author" content="Mateus Felipe Gonçalves" />
        <meta name="theme-color" content="#30A7C5" />

        <script
          async
          defer
          data-website-id={process.env.UMAMI_DATA_WEBSITE_ID}
          src={process.env.UMAMI_INSTANCE_SRC}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
