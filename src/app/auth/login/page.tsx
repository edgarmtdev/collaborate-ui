import Link from 'next/link'
import { css } from '~root/styled-system/css'

export default function Login() {
  return (
    <div className={css({
      maxWidth: '520px',
      mx: 'auto',
      bg: 'coolGray.200/90',
      py: 64,
      px: 32,
      rounded: 10
    })}>
      <form className={css({
        display: 'grid',
        gap: 34
      })}>
        <h2 className={css({
          fontSize: '4xl',
          fontWeight: 'extraBold'
        })}>
          Login
        </h2>
        <p className={css({
          color: 'coolGray.600',
          fontWeight: 'medium'
        })}>
          No account?, <Link href='/auth/register' className={css({ color: 'primary.800' })}>Sign up</Link>
        </p>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' name='username' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='text' name='password' />
        </div>

        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}
