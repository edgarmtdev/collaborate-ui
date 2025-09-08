import { Constant } from '@/const/Constant'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'

const getHeaders = () => ({
  'Content-Type': 'application/json',
  Cookie: cookies().toString()
})

export async function get(path: string) {
  try {
    const response = await fetch(`${Constant.API_URL}${path}`, {
      method: 'GET',
      headers: {
        ...getHeaders()
      }
    })

    if (!response.ok) {
      throw new Error(JSON.stringify(response))
    }

    return response.json()
  } catch (error) {
    return error
  }
}

export async function post<T>(path: string, data?: unknown, options?: RequestInit): Promise<T> {
  const isFormData = typeof FormData !== 'undefined' && data instanceof FormData

  const fetchOptions: RequestInit = {
    method: 'POST',
    headers: {
      ...options?.headers,
      ...(isFormData ? { Cookie: cookies().toString() } : getHeaders()) // Only set Cookie for FormData, not Content-Type
    }
  }

  if (typeof data !== 'undefined') {
    fetchOptions.body = isFormData ? data as BodyInit : JSON.stringify(data)
  }

  const response = await fetch(`${Constant.API_URL}${path}`, fetchOptions)

  if (!response.ok) {
    throw new Error(JSON.stringify(await response.json()))
  }

  // Solo guardar la cookie si NO es un logout
  if (!path.includes('/logout') && response.headers.get('Set-Cookie')) {
    setAuthCookie(response)
  }

  return response.json()
}

export async function put(path: string, data?: unknown) {
  try {
    const response = await fetch(`${Constant.API_URL}${path}`, {
      body: JSON.stringify(data),
      method: 'PUT',
      headers: {
        ...getHeaders()
      }
    })

    return response.json()
  } catch (error) {
    return error
  }
}

export async function patch(path: string, data?: unknown) {
  try {
    const response = await fetch(`${Constant.API_URL}${path}`, {
      body: JSON.stringify(data),
      method: 'PATCH',
      headers: {
        ...getHeaders()
      }
    })
    return response.json()
  } catch (error) {
    return error
  }
}

export async function del(path: string, data?: unknown) {
  try {
    const response = await fetch(`${Constant.API_URL}${path}`, {
      body: JSON.stringify(data),
      method: 'DELETE',
      headers: {
        ...getHeaders()
      }
    })
    return response.json
  } catch (error) {
    return error
  }
}

function setAuthCookie(response: Response) {
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
