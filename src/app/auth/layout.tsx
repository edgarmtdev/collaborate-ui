import { Background } from '@/components/auth'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { bodyStyles, footerStyles, headerStyles } from './layout.styled'

export default function AuthLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <header className={headerStyles}>
        <Link href='/'>
          <h1>Collaborate</h1>
        </Link>
      </header>
      <Background />
      <main>
        <section className={bodyStyles.grid}>
          <div className={bodyStyles.labelSection}>
            <h2>Collaborate joins people with common goals...</h2>
          </div>
          <div>
            {children}
          </div>
        </section>
        <footer className={footerStyles} >
          Hello
        </footer>
      </main>
    </>
  )
}
