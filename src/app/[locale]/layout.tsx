import { ReactNode } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import { Nunito } from 'next/font/google'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import { notFound } from 'next/navigation'

// Can be imported from a shared config
const locales = ['en', 'pt-br']

import './global.css'

const APP_NAME = 'Noisekun'
const APP_DESCRIPTION =
  'Listen combinations of ambient sounds for relaxing or getting more productive on your task!'
const APP_URL = process.env.HOSTNAME
  ? `https://${process.env.HOSTNAME}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: `${APP_NAME} — ${APP_DESCRIPTION}`,
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
    url: '/',
    images: '/images/banner.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '/',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: '/images/banner.png'
  }
}

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-nunito'
})

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: any
}) {
  if (!locales.includes(locale as any)) notFound()
  const messages = useMessages()

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body className={nunito.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
