'use server'

import fetch from '@/api'
import type { Credentials, RegisterData, RegisterResponse } from '@/types/auth-types'
import { cache } from 'react'

export async function loginService(credentials: Credentials) {
  const response = await fetch.post('/auth/login', credentials)

  return response
}

export async function registerService(credentials: RegisterData): Promise<RegisterResponse> {
  const response = await fetch.post('/auth/register', credentials)
  return response as RegisterResponse
}

export const validateUser = cache(async () => {
  const res = await fetch.get('/auth/validate', {
    credentials: 'include',
    cache: 'no-store'
  })

  if (!res.ok) {
    return { isLoggedIn: false }
  }

  return { isLoggedIn: true, user: res }
})

export async function logoutService() {
  const res = await fetch.post('/auth/logout')
  return res
}

export async function verifyEmailByToken(token: string) {
  const res = await fetch.get(`/auth/verify-email?token=${token}`)
  return res
}
