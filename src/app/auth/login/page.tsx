import { AuthWithSocial, LoginForm } from '@/components/auth'
import { validateUser } from '@/services/auth'
import { permanentRedirect } from 'next/navigation'
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
    permanentRedirect('/')
  }

  return (
    <div className={container}>
      <LoginForm />
      <AuthWithSocial />
    </div>
  )
}
