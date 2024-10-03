import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans as NunitoSans } from 'next/font/google'
import type { ReactNode } from 'react'

const nunitoSans = NunitoSans({
  preload: true,
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'Collaborate',
  description: 'Collaborate is an app for managing projects with kanban boards.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={nunitoSans.className}>
        {children}
      </body>
    </html>
  )
}
