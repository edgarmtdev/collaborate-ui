import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import type { ReactNode } from 'react'

const nunitofont = Nunito({
  preload: true,
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
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
      <body className={nunitofont.className}>
        {children}
      </body>
    </html>
  )
}
