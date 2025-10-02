import type { Metadata } from 'next'

import { resume } from '@/common/constants'
import { cn } from '@/lib/client-utils'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { Provider } from '@/components/layouts/provider'

import './globals.css'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${resume.name} | ${resume.role}`,
    template: `%s | ${resume.name}`
  },
  description: resume.description,
  openGraph: {
    title: `${resume.name} | ${resume.role}`,
    description: resume.description,
    url: baseUrl,
    siteName: `${resume.name} | ${resume.role}`,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'no-scrollbar mx-4 flex justify-center bg-stone-200 text-stone-800 antialiased lg:mx-auto dark:bg-stone-800 dark:text-stone-200',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
