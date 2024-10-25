import '@/styles/globals.css'
import { LayoutProps } from '@/types/common'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

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
}: LayoutProps
) {
  return (
    <html lang='es'>
      <body className={nunitofont.className}>
        {children}
      </body>
    </html>
  )
}
