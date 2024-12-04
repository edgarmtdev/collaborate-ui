import { Hero, Navbar } from '@/components/landing'
import { Banner } from '@/components/landing/banner/banner'
import { Button } from '@/components/ui'
import { validateUser } from '@/services/auth'
import { css } from '~root/styled-system/css'

export default async function Home() {
  const { isLoggedIn } = await validateUser()
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Hero />
      <main>
        <Banner />
        <section className={css({ backgroundColor: '#151515', color: 'white' })}>
          <div className={css({
            maxWidth: 'breakpoint-2xl',
            mx: 'auto',
            py: 64
          })}>
            <h2 className={css({
              fontSize: '4xl',
              fontWeight: 'extraBold',
              mb: 32
            })}>
              Collaborate join's people with common goals
            </h2>
            <Button>Sign Up - It's free</Button>
          </div>
        </section>
      </main>
    </>
  )
}
