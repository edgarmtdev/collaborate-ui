import { AppNavbar } from '@/components/global/app-navigation'
import { validateUser } from '@/services/auth'
import { LayoutProps } from '@/types/common'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children
}: LayoutProps
) {
  const { isLoggedIn, user } = await validateUser()

  if (!isLoggedIn) {
    redirect('/auth/login')
  }
  return (
    <>
      {/* Set a React context for state management of an Aside component */}
      <AppNavbar user={user} />
      {children}
    </>
  )
}
