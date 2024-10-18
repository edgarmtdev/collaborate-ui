import { Background } from '@/components/auth'
import { FacebookIcon, GoogleIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import icon from '~root/public/icon-mono.svg'
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
          <Image src={icon} alt='icon' height={36} />
        </Link>
      </header>
      <main>
        <Background />
        <section className={bodyStyles.grid}>
          <div className={bodyStyles.labelSection}>
            <h2>Collaborate joins people with common goals...</h2>
          </div>
          <div>
            {children}
          </div>
        </section>
        <footer className={footerStyles}>
          <section>
            <FacebookIcon/>
            <GoogleIcon />
          </section>
          <section>
            <p>Collaborate App Inc.</p>
          </section>
          <section>
            @2022 All rigths reserved
          </section>
        </footer>
      </main>
    </>
  )
}
