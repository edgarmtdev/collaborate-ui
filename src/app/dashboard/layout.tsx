import { AppNavbar } from '@/components/global/app-navigation'
import { NavbarContext } from '@/context'
import { ToastQueueProvider } from '@/context/toast-queue/Provider'
import { validateUser } from '@/services/auth'
import { getPendingInvitations } from '@/services/invitations'
import { LayoutProps } from '@/types/common'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children
}: LayoutProps
) {
  const { isLoggedIn, user } = await validateUser()
  const pendingInvitations = await getPendingInvitations()

  if (!isLoggedIn) {
    redirect('/auth/login')
  }
  return (
    <NavbarContext>
      <ToastQueueProvider>
        <AppNavbar user={user} pendingInvitations={pendingInvitations} />
        {children}
      </ToastQueueProvider>
    </NavbarContext>
  )
}
