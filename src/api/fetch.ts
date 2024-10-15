import { Constant } from '@/const/Constant'
import { cookies } from 'next/headers'

const getHeaders = () => ({
  Cookie: cookies().toString()
})

export async function get(path: string) {
  const response = await fetch(`${Constant.API_URL}${path}`, {
    headers: { ...getHeaders() }
  })

  return response.json()
}

export async function post(path: string, data: unknown) {
  const response = await fetch(`${Constant.API_URL}${path}`, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response
}
