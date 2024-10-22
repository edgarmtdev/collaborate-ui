import { Button, InputIcon } from '@/components/ui'
import { UserIcon } from '@/icons'
import Link from 'next/link'
import styled from './register-form.styled'

export function RegisterForm() {
  return (
    <form className={styled.form}>
      <h2>Register</h2>
      <p className={styled.backToLogin}>
        Back?,&nbsp;
        <Link href='/auth/login'>
          Go to Login
        </Link>
      </p>
      <div className='email-input'>
        <label htmlFor='email'>Email:</label>
        <InputIcon
          id='email'
          type='text'
          name='email'
          placeholder='Enter your email'
          required
          icon={UserIcon}
        />
      </div>
      <Button type='submit' width='full'>
        Sign up
      </Button>
    </form>
  )
}
