import { AppNavbar } from '@/components/global/app-navigation'
import { validateUser } from '@/services/auth'
import { LayoutProps } from '@/types/common'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children
}: LayoutProps
) {
  const { isLoggedIn } = await validateUser()

  if (!isLoggedIn) {
    redirect('/auth/login')
  }
  return (
    <>
      <AppNavbar />
      {children}
    </>
  )
}
