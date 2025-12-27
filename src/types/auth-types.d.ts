export type Credentials = {
  username: string
  password: string
}

export type LoginResponse = {
  success: boolean
  message: string
}

export type RegisterData = {
  email: string
  name: string
  lastname: string
  username: string
  password: string
}

export type RegisterResponse = {
  success: boolean
  message: string
}
