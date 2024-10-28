import { Aside } from '@/components/global/aside'
import { LayoutProps } from '@/types/common'
import { layoutStyled } from './dashboard.styled'

export default async function DashboardLayout({
  children
}: LayoutProps
) {
  return (
    <main className={layoutStyled}>
      <Aside />
      {children}
    </main>
  )
}
