'use server'

import { get, post } from '@/api/fetch'
import { type Credentials } from '@/types/auth-types'

export async function loginService(credentials: Credentials) {
  const response = await post('/auth/login', credentials)

  return response
}

export async function validateUser() {
  const res = await get('/auth/validate')

  if (!res.id) {
    return { isLoggedIn: false, message: res.message }
  }

  return { isLoggedIn: true, user: res }
}
