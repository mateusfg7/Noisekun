import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './global.css'
import Script from 'next/script'

const APP_NAME = 'Noisekun'
const APP_DESCRIPTION =
  'Listen combinations of ambient sounds for relaxing or getting more productive on your task!'
const APP_URL = 'https://noisekun.mateusf.com'

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  themeColor: '#04A2DC',

  keywords: [
    'noise',
    'sound',
    'ambience',
    'relaxing',
    'productive',
    'noisli',
    'noisekun'
  ],
  authors: [
    {
      name: 'Mateus Felipe Gonçalves',
      url: 'https://github.com/mateusfg7'
    }
  ],
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: 'device-width',
    viewportFit: 'cover'
  },
  formatDetection: {
    telephone: false
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: APP_NAME
  },
  openGraph: {
    type: 'website',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: `${APP_URL}/images/banner.png`
  },
  twitter: {
    card: 'summary_large_image',
    site: APP_URL,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: `${APP_URL}/images/banner.png`
  }
}

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-nunito'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body className={nunito.variable}>{children}</body>
    </html>
  )
}
