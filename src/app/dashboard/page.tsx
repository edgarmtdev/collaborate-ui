import { validateUser } from '@/services/auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const { isLoggedIn, user } = await validateUser()
  if (!isLoggedIn) {
    redirect('/auth/login')
  }
  return (
    <div>{user.name}</div>
  )
}
