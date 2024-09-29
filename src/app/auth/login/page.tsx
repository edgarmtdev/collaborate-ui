import { css } from '~root/styled-system/css'

export default function Login() {
  return (
    <div className={css({
      maxWidth: '640px',
      mx: 'auto',
      bg: 'coolGray.200',
      py: 64,
      px: 32
    })}>
      <form className={css({
        display: 'grid'
      })}>
        <h2>Login</h2>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' name='username' />

        <label htmlFor='password'>Password</label>
        <input id='password' type='text' name='password' />
      </form>
    </div>
  )
}
