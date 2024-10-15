import { Navbar } from '@/components/global/navigation'
import { validateUser } from '@/services/auth'

export default async function Home() {
  const { isLoggedIn, user } = await validateUser()
  return (
    <Navbar isLoggedIn={isLoggedIn} user={user} />
  )
}
