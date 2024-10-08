'use server'

import { loginService } from '@/services/auth'
import type { Credentials } from '@/types/auth-types.d'

export async function loginAction(credentials: Credentials) {
  return await loginService(credentials)
}