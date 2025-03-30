'use client'

import { Button, InputIcon } from '@/components/ui'
import { UserIcon } from '@/icons'
import Link from 'next/link'
import { useRegisterContext } from './context/register-ctx'
import styled from './register-form.styled'
import { css, cx } from '~root/styled-system/css'
import { FormEvent } from 'react'

export function RegisterForm() {
  const {
    handleSubmit,
    handleChange,
    currentStep,
    handleNextStep,
    handlePrevStep
  } = useRegisterContext()

  return (
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
          />
        </div>
      )}
      {currentStep === 2 && (
        <>
          <div>
            <label htmlFor='username'>Name:</label>
            <InputIcon
              type='text'
              name='name'
              placeholder='What is your name?'
              icon={UserIcon}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='username'>Username:</label>
            <InputIcon
              type='text'
              name='username'
              placeholder='What is your username?'
              icon={UserIcon}
              onChange={handleChange}
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
              icon={UserIcon}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <InputIcon
              type='password'
              name='confirmPassword'
              placeholder='Confirm your password'
              icon={UserIcon}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <div
        className={cx(
          currentStep > 1
            ? styled.buttonContainer
            : css({ display: 'grid', gridTemplateColumns: '1fr' }),
          css({ mt: 24 })
        )}
      >
        {currentStep > 1 && (
          <Button
            type='button'
            width='full'
            onClick={handlePrevStep}
            variant='black'
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
              onClick={(e) => handleSubmit(e as unknown as FormEvent<HTMLFormElement>)}
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
  )
}
