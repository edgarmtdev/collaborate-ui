'use client'

import { loginAction } from '@/app/actions/authActions'
import { Alert, Button, InputIcon, Toast } from '@/components/ui'
import { PadlockIcon, UserIcon } from '@/icons'
import Link from 'next/link'
import { useState } from 'react'
import styled from './login-form.styled'

import { type Credentials } from '@/types/auth-types'
import { type FormEvent } from 'react'

export function LoginForm() {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const [error, setError] = useState<string | null>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await loginAction(credentials)
      // PARSED
      const parsedResponse = JSON.parse(JSON.stringify(response))

      if (parsedResponse.success) {
        setError(null)
        setShowToast(true)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      let errorMessage = 'An error occurred'

      // Si el error es un objeto con un mensaje, extraemos ese mensaje
      if (error && error.message) {
        try {
          // Si el mensaje tiene formato JSON, lo parseamos
          const errorResponse = JSON.parse(error.message)
          errorMessage = errorResponse?.message || 'An error occurred'
        } catch (jsonError) {
          // Si el JSON no es válido, solo usamos el mensaje original
          errorMessage = error.message
        }
      }

      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Toast
        title='Login successfully'
        description='The Session has started successfully.'
        provider={{ swipeDirection: 'right' }}
        open={showToast}
        onOpenChange={setShowToast}
        type='success'
      />
      <form
        onSubmit={handleSubmit}
        className={styled.form}
      >
        <h2>Login</h2>
        <p className={styled.noAccount}>
          No account?,&nbsp;
          <Link href='/auth/register'>Sign up</Link>
        </p>
        {error &&
          <Alert size='sm' status='error' title={error} />}
        <div>
          <label htmlFor='username'>Username:</label>
          <InputIcon
            id='username'
            type='text'
            name='username'
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            placeholder='Enter your username...'
            required
            variant={error ? 'error' : 'main'}
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
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            placeholder='Enter your password'
            variant={error ? 'error' : 'main'}
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
        <Button type='submit' width='full' loading={isLoading}>
          Sign in
        </Button>
      </form>
    </>
  )
}
