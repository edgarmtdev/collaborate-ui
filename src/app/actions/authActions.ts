'use server'

import { loginService } from '@/services/auth'
import type { Credentials } from '@/types/auth-types.d'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'

export async function loginAction(credentials: Credentials) {
  const response = await loginService(credentials)

  setAuthCookie(response)

  return response
}

// TODO:  Refactor set cookie in custom fetch api
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