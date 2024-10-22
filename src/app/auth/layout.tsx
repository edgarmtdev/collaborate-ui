import { AuthWithSocial, Background, Footer } from '@/components/auth'
import { validateUser } from '@/services/auth'
import Image from 'next/image'
import Link from 'next/link'
import { permanentRedirect } from 'next/navigation'
import { bodyStyles, headerStyles } from './layout.styled'

import icon from '~root/public/icon-mono.svg'

import type { ReactNode } from 'react'

export default async function AuthLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const { isLoggedIn } = await validateUser()

  if (isLoggedIn) {
    permanentRedirect('/dashboard')
  }

  return (
    <>
      <Background />
      <header className={headerStyles}>
        <Link href='/'>
          <Image src={icon} alt='icon' height={36} loading='eager' priority />
        </Link>
      </header>
      <main className={bodyStyles.grid}>
        <section className={bodyStyles.labelSection}>
          <h2>Collaborate joins people with common goals...</h2>
        </section>
        <section>
          <div className={bodyStyles.formContainer}>
            {children}
            <AuthWithSocial />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
