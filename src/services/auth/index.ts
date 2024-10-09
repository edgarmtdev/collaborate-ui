import { Constant } from '@/const/Constant'
import { type Credentials } from '@/types/auth-types'

export async function loginService(credentials: Credentials) {
  const response: Response = await fetch(`${Constant.API_URL}/auth/login`, {
    body: JSON.stringify(credentials),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response
}