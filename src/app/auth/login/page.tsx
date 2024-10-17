import { LoginForm } from '@/components/auth'
import { Button } from '@/components/ui'
import { FacebookIcon } from '@/icons/facebook'
import { GoogleIcon } from '@/icons/google'
import { validateUser } from '@/services/auth'
import { redirect } from 'next/navigation'
import { css } from '~root/styled-system/css'

const container = css({
  maxWidth: '500px',
  mx: 'auto',
  bg: 'white/90',
  rounded: 4,
  px: 32,
  py: 18,
  md: {
    px: 48,
    py: 32
  }
})

export default async function Login() {
  const { isLoggedIn } = await validateUser()

  if (isLoggedIn) {
    redirect('/')
  }

  return (
    <div className={container}>
      <LoginForm />
      <section className={css({ display: 'grid', gap: 34, py: 34 })}>
        <Button variant='monocrom' width='full'>
          <GoogleIcon className={css({ fill: 'neutral' })}/>
          Continue with Google
        </Button>
        <Button variant='monocrom' width='full'>
          <FacebookIcon className={css({ fill: 'neutral' })} />
          Continue with Facebook
        </Button>
      </section>
    </div>
  )
}
