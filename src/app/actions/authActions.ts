'use server'

import { loginService, logoutService } from '@/services/auth'
import type { Credentials } from '@/types/auth-types.d'
import { cookies } from 'next/headers'

export async function loginAction(credentials: Credentials) {
  const response = await loginService(credentials)

  return JSON.parse(JSON.stringify(response))
}

export async function logoutAction() {
  const response = await logoutService()
  cookies().set('Authentication', '', { expires: new Date(0) })

  return JSON.parse(JSON.stringify(response))
}
