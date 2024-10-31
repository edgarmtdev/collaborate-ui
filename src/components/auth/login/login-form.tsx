'use client'

import { loginAction } from '@/app/actions/authActions'
import { Button } from '@/components/ui'
import { InputIcon } from '@/components/ui/input'
import { PadlockIcon, UserIcon } from '@/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, type FormEvent } from 'react'
import styled from './login-form.styled'
import * as Toast from '@radix-ui/react-toast'
import { css } from '~root/styled-system/css'

export function LoginForm() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPass, setShowPass] = useState<boolean>(false)

  const router = useRouter()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await loginAction({ username, password })

      if (response.success) {
        alert(response.message)

        router.push('/dashboard')
      } else {
        setError(response.message)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error?.message || 'An error ocurred')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => setError(null), 1500)
  }, [error])

  return (
    <>
      <Toast.Provider swipeDirection='right'>
        <Toast.Root open >
          <Toast.Title>
            Toast
          </Toast.Title>
          <Toast.Description asChild>
            Description
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport
          className={css({
            zIndex: 'toast',
            position: 'absolute',
            w: 390,
            display: 'flex',
            flexDir: 'column'
          })}
        />
      </Toast.Provider>
      <form
        onSubmit={handleSubmit}
        className={styled.form}
      >
        <h2>Login</h2>
        <p className={styled.noAccount}>
          No account?,&nbsp;
          <Link href='/auth/register'>Sign up</Link>
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
            type={showPass ? 'text' : 'password'}
            name='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            color={error ? 'error' : 'main'}
            icon={PadlockIcon}
          />
          <span className={styled.showPassCheckbox}>
            <input id='showPass' type='checkbox' onChange={(e) => setShowPass(e.target.checked)} />
            <label htmlFor='showPass'>Show password</label>
          </span>
        </div>
        <Link
          href='/'
          className={styled.forgotPassword}
        >
          Forgot password?
        </Link>
        {error &&
          <p className={styled.error}>{error}</p>}
        <Button type='submit' width='full'>
          {isLoading ? 'Loading...' : 'Sign in'}
        </Button>
      </form>
    </>
  )
}
