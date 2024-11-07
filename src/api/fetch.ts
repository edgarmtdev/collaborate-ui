import { Constant } from '@/const/Constant'
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

    return response.json()
  } catch (error) {
    if (error instanceof Error) {
      return new Error('An error ocurred', { cause: error })
    }
    return error
  }
}

export async function post(path: string, data?: unknown) {
  try {
    const response = await fetch(`${Constant.API_URL}${path}`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        ...getHeaders()
      }
    })

    return response.json()
  } catch (error) {
    return error
  }
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
