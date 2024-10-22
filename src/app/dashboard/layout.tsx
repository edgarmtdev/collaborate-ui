import { AppNavbar } from '@/components/global/app-navigation'
import { ReactNode } from 'react'

export default function DashboardLayout({
  children
}: Readonly<{
  children: ReactNode
}>
) {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
    </>
  )
}
