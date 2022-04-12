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
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
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
        <meta name="theme-color" content="#04A2DC" />

        <script
          async
          defer
          data-website-id="cd21c714-5753-4e56-ad9a-8a5dee7bcc9d"
          src="https://mateusfg7-umami-instance.herokuapp.com/umami.js"
          data-domains="noisekun.vercel.app"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
