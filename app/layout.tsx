import { Metadata } from 'next'

import './globals.css'
import { css } from '@/styled-system/css'

import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Tamanegi',
  description: 'Tamanegi app',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${quicksand.className} ${css({ background: '#F3E5F5' })}`}>{children}</body>
    </html>
  )
}
