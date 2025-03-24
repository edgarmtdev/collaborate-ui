'use server'

import fetch from '@/api'
import { type Credentials } from '@/types/auth-types'

export async function loginService(credentials: Credentials) {
  const response = await fetch.post('/auth/login', credentials)

  return response
}

export async function validateUser() {
  const res = await fetch.get('/auth/validate')

  if (!res.id) {
    return JSON.parse(JSON.stringify({ isLoggedIn: false, message: res.message }))
  }

  return JSON.parse(JSON.stringify({ isLoggedIn: true, user: res }))
}

export async function logoutService() {
  const res = await fetch.post('/auth/logout')
  return res
}
