import { Hero, Navbar } from '@/components/landing'
import { Banner } from '@/components/landing/banner/banner'
import { validateUser } from '@/services/auth'
import { css } from '~root/styled-system/css'

const classes = {
  root: css({
    maxWidth: 'breakpoint-2xl',
    mx: 'auto',
    py: 64
  })
}

export default async function Home() {
  const { isLoggedIn } = await validateUser()
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main className={classes.root}>
        <Hero />
        <Banner />
      </main>
    </>
  )
}
