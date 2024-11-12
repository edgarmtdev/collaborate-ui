import fetch from '@/api'
import { Hero, Navbar } from '@/components/landing'
import { Constant } from '@/const/Constant'
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
  const appInfo = await fetch.get('/')
  console.log('🚀 ~ Home ~ appInfo ~ url:', Constant.API_URL)
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main className={classes.root}>
        <Hero />
        {JSON.stringify(appInfo)}
        {JSON.stringify(appInfo)}
      </main>
    </>
  )
}
