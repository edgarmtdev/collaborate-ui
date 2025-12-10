'use client'

import { Button, Input, InputIcon } from '@/components/ui'
import { PadlockIcon, UserIcon } from '@/icons'
import Link from 'next/link'
import { useRegisterContext } from './context/register-ctx'
import styled from './register-form.styled'
import { css, cx } from '~root/styled-system/css'
import { FormEvent } from 'react'

export function RegisterForm() {
  const {
    handleSubmit,
    handleChange,
    registerData,
    error,
    loading,
    message,
    success,
    currentStep,
    handleNextStep,
    handlePrevStep
  } = useRegisterContext()

  return (
    <>
      {success
        ? (
          <div className={styled.successMessage}>
            {message}
          </div>
        )
        : (
          <form className={styled.form} onSubmit={handleSubmit}>
            <h2>Register</h2>
            <p className={styled.backToLogin}>
              Back?,&nbsp;
              <Link href='/auth/login'>Go to Login</Link>
            </p>
            {currentStep === 1 && (
              <div className='email-input'>
                <label htmlFor='email'>Email:</label>
                <InputIcon
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Write your email'
                  icon={UserIcon}
                  onChange={handleChange}
                  value={registerData.email}
                  required
                  variant={error ? 'error' : 'main'}
                />
              </div>
            )}
            {currentStep === 2 && (
              <>
                <div>
                  <label htmlFor='username'>Name:</label>
                  <Input
                    type='text'
                    name='name'
                    placeholder='What is your name?'
                    onChange={handleChange}
                    value={registerData.name}
                    color={error ? 'error' : 'main'}
                  />
                </div>
                <div>
                  <label htmlFor='lastname'>Last Name:</label>
                  <Input
                    type='text'
                    name='lastname'
                    placeholder='What is your last name?'
                    onChange={handleChange}
                    value={registerData.lastname}
                    color={error ? 'error' : 'main'}
                  />
                </div>
                <div>
                  <label htmlFor='username'>Username:</label>
                  <Input
                    type='text'
                    name='username'
                    placeholder='Write an username'
                    onChange={handleChange}
                    value={registerData.username}
                    color={error ? 'error' : 'main'}
                  />
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div>
                  <label htmlFor='password'>Password:</label>
                  <InputIcon
                    type='password'
                    name='password'
                    placeholder='Write your password'
                    icon={PadlockIcon}
                    onChange={handleChange}
                    value={registerData.password}
                    variant={error ? 'error' : 'main'}
                  />
                </div>
                <div>
                  <label htmlFor='confirmPassword'>Confirm Password:</label>
                  <InputIcon
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm your password'
                    icon={PadlockIcon}
                    onChange={handleChange}
                    value={registerData.confirmPassword}
                    variant={error ? 'error' : 'main'}
                  />
                </div>
              </>
            )}
            <div className={styled.errorMessage}>
              {error && <p>{error}</p>}
            </div>
            <div
              className={cx(
                currentStep > 1
                  ? styled.buttonContainer
                  : css({ display: 'grid', gridTemplateColumns: '1fr' }),
                css({ mt: 10 })
              )}
            >
              {currentStep > 1 && (
                <Button
                  type='button'
                  width='full'
                  onClick={handlePrevStep}
                  variant='secondary'
                >
                  Back
                </Button>
              )}
              {currentStep === 3
                ? (
                  <Button
                    type='button'
                    width='full'
                    variant='primary'
                    onClick={(e) =>
                      handleSubmit(e as unknown as FormEvent<HTMLFormElement>)
                    }
                    loading={loading}
                  >
                    Register
                  </Button>
                )
                : (
                  <Button
                    type='button'
                    width='full'
                    onClick={handleNextStep}
                    variant='primary'
                  >
                    Next
                  </Button>
                )}
            </div>
          </form>
        )}
    </>
  )
}
