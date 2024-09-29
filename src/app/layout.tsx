import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import type { ReactNode } from 'react'

const ubuntu = Ubuntu({
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
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
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  )
}
