import { Navbar } from '@/components/global/navigation'
import { validateUser } from '@/services/auth'
import { css } from '~root/styled-system/css'

export default async function Home() {
  const { isLoggedIn } = await validateUser()
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main className={css({
        maxWidth: 'breakpoint-2xl',
        mx: 'auto',
        py: 36
      })}
      >
        <h1 className={css({
          fontSize: 36,
          fontWeight: 'extraBold',
          textAlign: 'center',
          color: 'neutral'
        })}>
          Collaborate join's people with common goals
        </h1>
      </main>
    </>
  )
}
