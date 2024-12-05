import { Banner, CallToAction, FamiliarTools, Hero, Navbar } from '@/components/landing'
import { validateUser } from '@/services/auth'

export default async function Home() {
  const { isLoggedIn } = await validateUser()
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main>
        <Hero />
        <Banner />
        <CallToAction />
        <FamiliarTools />
      </main>
    </>
  )
}
