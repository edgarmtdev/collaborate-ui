import { Background } from '@/components/auth'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { bodyStyles, footerStyles, headerStyles } from './layout.styled'
import Image from 'next/image'
import icon from '~root/public/icon-mono.svg'

export default function AuthLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <header className={headerStyles}>
        <Link href='/'>
          <Image src={icon} alt='icon' height={36} />
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
