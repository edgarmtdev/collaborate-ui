'use client'

import { Aside } from '@/components/global/aside'
import { LayoutProps } from '@/types/common'
import { layoutStyled } from './dashboard.styled'

export default function DashboardLayout({
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
