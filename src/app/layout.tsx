import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { type ReactNode } from 'react'
import './globals.css'

const ubuntu = Ubuntu({
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Collaborate'
  // description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
