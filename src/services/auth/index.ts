export type Credentials = {
  username: string
  password: string
}

export async function loginService(credentials: Credentials) {
  const response = await fetch('http://localhost:3000/api/v1/auth/login', {
    body: JSON.stringify(credentials),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Error al iniciar sesión')
  }

  return await response.json()
}