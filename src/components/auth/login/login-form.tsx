'use client'

import { loginAction } from '@/app/actions/authActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { css } from '~root/styled-system/css'
import styled from './login-form.styled'
import { Input } from '@/components/ui/input'

export function LoginForm() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await loginAction({ username, password })

      if (response.success) {
        alert(response.message)

        router.push('/')
      } else {
        setError(response.message)
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error?.message || 'An error ocurred')
    }
  }

  return (
    <div className={styled.root}>
      <form
        onSubmit={handleSubmit}
        className={styled.form}
      >
        <h2>Login</h2>
        <p className={styled.label}>
          No account?,&nbsp;
          <Link
            href='/auth/register'
            className={css({ color: 'primary.800' })}
          >
            Sign up
          </Link>
        </p>
        <div>
          <label htmlFor='username'>Username</label>
          <Input
            id='username'
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            color='main'
            size='sm'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Input
            id='password'
            type='text'
            name='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size='md'
          />
        </div>
        {error && <p className={css({ color: 'red' })}>{error}</p>}
        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}
