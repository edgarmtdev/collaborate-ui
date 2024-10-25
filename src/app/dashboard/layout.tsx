import { AppNavbar } from '@/components/global/app-navigation'
import { LayoutProps } from '@/types/common'

export default function DashboardLayout({
  children
}: LayoutProps
) {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  )
}
