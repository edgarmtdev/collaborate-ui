'use server'

import { loginService } from '@/services/auth'
import type { Credentials } from '@/types/auth-types.d'

export async function loginAction(credentials: Credentials) {
  const response = await loginService(credentials)
  console.log('🚀 ~ loginAction ~ response:', response)

  return JSON.parse(JSON.stringify(response))
}
