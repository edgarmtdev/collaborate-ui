'use client'

import { loginAction } from '@/app/actions/authActions'
import { Button } from '@/components/ui'
import { InputIcon } from '@/components/ui/input'
import { PadlockIcon, UserIcon } from '@/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, type FormEvent } from 'react'
import { css } from '~root/styled-system/css'
import styled from './login-form.styled'

export function LoginForm() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>('')

  const router = useRouter()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await loginAction({ username, password })

      if (response.success) {
        alert(response.message)

        router.push('/dashboard')
      } else {
        setError(response.message)
      }
    } catch (error: any) {
      setError(error?.message || 'An error ocurred')
    }
  }

  useEffect(() => {
    setTimeout(() => setError(null), 1500)
  }, [error])

  return (
    <form
      onSubmit={handleSubmit}
      className={styled.form}
    >
      <h2>Login</h2>
      <p className={styled.noAccount}>
        No account?,&nbsp;
        <Link
          href='/auth/register'
          className={css({
            color: 'primary.800',
            _hover: { textDecoration: 'underline' }
          })}
        >
          Sign up
        </Link>
      </p>
      <div>
        <label htmlFor='username'>Username:</label>
        <InputIcon
          id='username'
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter your username...'
          required
          color={error ? 'error' : 'main'}
          icon={UserIcon}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <InputIcon
          id='password'
          type='password'
          name='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
          color={error ? 'error' : 'main'}
          icon={PadlockIcon}
        />
      </div>
      <Link
        href='/'
        className={css({
          w: 'max-content',
          mx: 'auto',
          _hover: { textDecoration: 'underline' }
        })}
      >
        Forgot password?
      </Link>
      {error &&
        <p className={css({ color: 'error', fontWeight: 'semibold' })}>{error}</p>}
      <Button type='submit' width='full'>
        Sign in
      </Button>
    </form>
  )
}
