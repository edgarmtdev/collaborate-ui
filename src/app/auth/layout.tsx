import { Background } from '@/components/auth/background'
import type { ReactNode } from 'react'
import { css } from '~root/styled-system/css'

export default function AuthLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <header className={css({
        p: 12,
        position: 'absolute',
        top: 0,
        zIndex: '50',
        color: 'white',
        textStyle: 'header.lg',
        fontWeight: 'bold'
      })}>
        <h1 className={css({
          textTransform: 'uppercase'
        })}>Collaborate</h1>
      </header>
      <Background />
      <main>
        <section className={css({
          position: 'absolute',
          width: '100%',
          lg: {
            display: 'grid',
            gridTemplateColumns: 2
          },
          minHeight: '100vh',
          p: 24
        })}>
          <div className={css({
            display: 'flex',
            alignItems: 'center',
            color: 'white'
          })}>
            <h2 className={css({
              fontSize: '3xl',
              fontWeight: 'medium'
            })}>
            Collaborate joins people with common goals...
            </h2>
          </div>
          <div>
            {children}
          </div>
        </section>
        <footer className={css({
          position: 'absolute',
          width: '100%',
          p: 24,
          bottom: 0
        })}
        >
          Hello
        </footer>
      </main>
    </>
  )
}
