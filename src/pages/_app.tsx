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

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noisekun.vercel.app/" />
        <meta property="og:title" content="Noisekun" />
        <meta
          property="og:description"
          content="Listen combinations of ambient sounds for relaxing or getting more productive on your task!"
        />
        <meta property="og:image" content="https://noisekun.vercel.app/images/banner.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://noisekun.vercel.app/" />
        <meta property="twitter:title" content="Noisekun" />
        <meta
          property="twitter:description"
          content="Listen combinations of ambient sounds for relaxing or getting more productive on your task!"
        />
        <meta property="twitter:image" content="https://noisekun.vercel.app/images/banner.png" />

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
