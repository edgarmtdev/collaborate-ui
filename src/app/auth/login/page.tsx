import { LoginForm } from '@/components/auth'
import { validateUser } from '@/services/auth'
import { redirect } from 'next/navigation'

export default async function Login() {
  const { isLoggedIn } = await validateUser()

  if (isLoggedIn) {
    redirect('/')
  }

  return (
    <LoginForm />
  )
}
