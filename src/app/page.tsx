import { Navbar } from '@/components/global/navigation'
import { validateUser } from '@/services/auth'

export default async function Home() {
  const { isLoggedIn } = await validateUser()
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main>This is the home page</main>
    </>
  )
}
