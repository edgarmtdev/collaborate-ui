'use client'

import { RegisterForm } from '@/components/auth/register'
import { RegisterProvider } from '@/components/auth/register/context/register-ctx'

export default function Register() {
  return (
    <RegisterProvider>
      <RegisterForm />
    </RegisterProvider>
  )
}
