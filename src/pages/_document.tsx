import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="pt">
        <Head>
          <link
            href="/icons/icon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="/icons/icon-100x100.png"
            rel="icon"
            type="image/png"
            sizes="100x100"
          />
          <link
            href="/icons/icon-192x192.png"
            rel="icon"
            type="image/png"
            sizes="192x192"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
