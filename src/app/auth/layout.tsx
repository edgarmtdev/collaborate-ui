import { Background, Footer } from '@/components/auth'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import icon from '~root/public/icon-mono.svg'
import { bodyStyles, headerStyles } from './layout.styled'

export default function AuthLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Background />
      <header className={headerStyles}>
        <Link href='/'>
          <Image src={icon} alt='icon' height={36} loading='eager' priority />
        </Link>
      </header>
      <main className={bodyStyles.grid}>
        <div className={bodyStyles.labelSection}>
          <h2>Collaborate joins people with common goals...</h2>
        </div>
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
