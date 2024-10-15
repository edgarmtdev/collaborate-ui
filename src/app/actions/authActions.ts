'use server'

import { loginService } from '@/services/auth'
import type { Credentials } from '@/types/auth-types.d'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'

export async function loginAction(credentials: Credentials) {
  const response = await loginService(credentials)

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Error al iniciar sesión')
  }

  setAuthCookie(response)

  return await response.json()
}

const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get('Set-Cookie')

  if (setCookieHeader) {
    const token = setCookieHeader.split(';')[0].split('=')[1]

    cookies().set({
      name: 'Authentication',
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000)
    })
  }
}